const express = require('express')
const router = express.Router();
const connection = require('../database')

function CheckWin(res,Match,message){
    connection.execute('SELECT TileBoardID FROM tileboard INNER JOIN cards on tileboard.CardID = cards.CardID Where CardRoleID = 2 And tileboard.MatchID = ? And LocationID IN (1, 7, 13, 19)',
    [Match],
        function (err, results, fields) {
            if (err) {
                res.status(400).send({
                    message,
                    "authenticated": false,
                    "log":"Error: "+err,
                    "Results": 0,});
                return;
            }
            if (results.length > 0){
                connection.execute('UPDATE match_ SET Match_GameStateID = ? Where MatchID = ?',
                    [5,Match],
                    function (err, results, fields) {
                    console.log("Hi")
                    res.status(200).send({
                        message,
                        "authenticated": true,
                        "log":"Attackers win!",
                        "Results": 2,});
                    return 
                    })
            }else{
                connection.execute('SELECT Turn FROM match_ Where MatchID = ? and Turn >= 26',
                [Match],
                function (err, results, fields) {
                    if (err){Resources
                        res.status(400).send({
                            message,
                            "authenticated": true,
                            "log":"Error: "+err,
                            "Results": 0,
                        });
                        return;
                    }
                    else if (results.length > 0){
                        connection.execute('UPDATE match_ SET Match_GameStateID = ? Where MatchID = ?',
                        [4,Match],
                        function (err, results, fields) {
                            if (results){
                                res.status(200).send({
                                    message,
                                    "authenticated": true,
                                    "log":"Defender win!",
                                    "Results": 1,});
                                return 
                            }else{
                                res.status(400).send({
                                    message,
                                    "authenticated": false,
                                    "log":"Error: "+err,
                                    "Results": 0,});
                                return;
                            }
                        })
                    }
                    else{
                        res.status(200).send({
                            message,
                            "authenticated": true,
                            "log":"Error: "+err,
                            "Results": 0,});
                    }
            })
        }
    })
}
function CheckTurn(response,Action,VarTable){
    var RoleID
    var GameStatus
    var Match = VarTable[0]
    var PlayerID = VarTable[1]
    connection.execute('SELECT RolesID FROM playermatch WHERE MatchID = ? AND UserID = ?',
    [Match,PlayerID],
    function (err, results, fields) {
        if (results.length > 0){
            RoleID = results[0].RolesID;
            connection.execute('SELECT Match_GameStateID FROM match_ WHERE MatchID = ?',
            [Match],
            function (err, results, fields) {
                if (results.length > 0){
                    GameStatus = results[0].Match_GameStateID;
                    if (GameStatus == 2 && RoleID == 1 || GameStatus == 3 && RoleID == 2 ){
                        VarTable["GameST"] = GameStatus
                        Action(Match,response,VarTable)
                        return
                    }else{
                        response.status(400).send({"log":"You can't perform an action when it's not your turn, PlayerID:"+PlayerID+" MatchID:"+Match+" RoleID: "+RoleID+" GameStatusID: "+GameStatus});
                    }
                }else{
                    response.status(400).send({"log":"No Match: '"+Match+"' Exists again"});
                };
            });
        }else{
            response.status(400).send({"log":"No Match: '"+Match+"' Exists"});
        };
    });
}
function SelectCard(match,response,VarTable){
    var MatchID = VarTable[0]
    var PlayerID = VarTable[1]
    var PosX = VarTable[2]
    var PosY = VarTable[3]
    var LocID
    connection.execute('SELECT LocationID FROM location WHERE PosX = ? AND PosY = ?',
    [PosX,PosY],
    function (err, results, fields) {
        if (err){
            response.status(400).send({"log":"Error: "+err})
            return
        }else if (results.length > 0){
            LocID = results[0].LocationID
            connection.execute('SELECT TileBoardID FROM tileboard WHERE LocationID = ? and MatchID = ? and UserID = ? and CurrentHealth > 0',
            [LocID,MatchID,PlayerID],
            function (err, results, fields) {
                if (err){
                    response.status(400).send({"log":"Error: "+err})
                    return
                }else if (results.length > 0){
                    VarTable["Unit"] = results[0].TileBoardID
                    VarTable["LocationID"] = LocID
                    ResourceActionTax(match,response,VarTable)
                }else{
                    response.status(400).send({"log":"No Found Unit"})
                    return
                }
            })
        }else{
            response.status(400).send({"log":"No Location Here :("+ VarTable})
            return
        }
    });
}
function ResourceActionTax(Match,response,VarTable){
    var func = VarTable["Action"]
    var NumOfActions = VarTable["NumOfActions"]
    var CurrentResources
    var ActionCost = 0
    connection.execute('SELECT cards.ActionCost FROM tileboard INNER JOIN cards on tileboard.CardID = cards.CardID Where TileBoardID = ?',
    [VarTable["Unit"]],
    function (err, results, fields) {
        if (err){
            response.status(400).send({"log":"Error: "+err})
            return
        }else if(results.length > 0){
            ActionCost = results[0].ActionCost
            connection.execute('SELECT Resources FROM playermatch WHERE MatchID = ? and UserID = ?',
                    [Match,VarTable[1]],
                        function (err, results, fields) {
                        if (err){
                            response.status(400).send({"log":"Error: "+err})
                            return
                        
                        }else if(results.length > 0){
                            CurrentResources = results[0].Resources
                            var Resources = CurrentResources-(ActionCost*NumOfActions)
                            VarTable["Resources"] = Resources
                        if (Resources >= 0){
                            connection.execute('UPDATE playermatch SET Resources = ? Where MatchID = ? and UserID = ?',
                            [Resources,VarTable[0],VarTable[1]],
                            function(err,results,fields){
                                if (err){
                                    response.status(400).send({"log":"Error: "+err});
                                    return
                                }else if(results){
                                    func(Match,response,VarTable)
                                }else{
                                    response.status(400).send({"log":results});
                                    return
                                }
                            })
                        }else{
                            response.status(400).send({"log":"You don't have enough resources to perform this action:"+ActionCost*NumOfActions})
                            return
                        }
                        }else{
                            response.status(400).send({"log":"Couldn't Find Resources of Player: "+VarTable[1]+" from Match:"+VarTable[2]})
                            return
                        }
            })
        }else{
            response.status(400).send({"log":"Action Cost Couldn't be found"})
            return
        }
    })
}
function ResetResource(response,Turn,VarTable){
    var MatchID = VarTable
    connection.execute('UPDATE playermatch SET Resources = ? Where MatchID = ?',
    [Turn,MatchID],
    function(err,results,fields){
        if (err){
            response.status(400).send({"log":"Error: "+err});
            return
        }else{
            response.status(200).send({"log":"Turn Done Resources set to new turn number: "+Turn})
            return
        }
    })
}
function PlaceCard(response,MatchID,PlayerID,CardID,Location,RemainingR){
    var MaxHealth = 0
    connection.execute('SELECT Health FROM cards WHERE CardID = ?',
    [CardID],
        function (err, results, fields) {
            if (err){
                response.status(400).send(err);
            return
            }else{
                MaxHealth = results[0].Health
                connection.execute('INSERT INTO tileboard (CurrentHealth, CardID, LocationID, MatchID, UserID) VALUES (?,?,?,?,?)',
                [MaxHealth, CardID, Location, MatchID, PlayerID],
                function (err, results, fields) {
                if (err){
                    response.status(400).send({"log": "Error: "+ err});
                    return
                }else{
                    response.status(200).send({"log": "Placed Card",
                    "UnitID": CardID,
                    "TileboardID": results.insertId,
                    "Health" : MaxHealth,
                    "Resources" : RemainingR,
                    })
                    return
                }
            });    
            }
});
}
function BuyCard(response,MatchID,PlayerID,CardID,location){
    var UnitCost = 0
    var CurrentResources = 0
    var RoleID = 0
    connection.execute('SELECT RolesID FROM playermatch Where UserID = ? and MatchID = ?',
        [PlayerID,MatchID],
        function (err, results, fields) {
            if (err){
                response.status(400).send(err)
                return
            }else if(results.length > 0){
                RoleID = results[0].RolesID
                connection.execute('SELECT SpawnCost FROM cards Where CardID = ? and CardRoleID = ?',
                [CardID,RoleID],
                function (err, results, fields) {
                    if (err){
                        response.status(400).send(err)
                        return
                    }else if(results.length > 0){
                        UnitCost = results[0].SpawnCost
                        connection.execute('SELECT Resources FROM playermatch WHERE MatchID = ? and UserID = ?',
                                [MatchID,PlayerID],
                                    function (err, results, fields) {
                                    if (err){
                                        response.status(400).send({"log": "Error: "+ err})
                                        return
                                    
                                    }else if(results.length > 0){
                                        CurrentResources = results[0].Resources
                                        var RemainingR = CurrentResources-UnitCost
                                    if ((CurrentResources-UnitCost) >= 0){
                                        connection.execute('UPDATE playermatch SET Resources = ? Where MatchID = ? and UserID = ?',
                                        [RemainingR,MatchID,PlayerID],
                                        function(err,results,fields){
                                            if (err){
                                                response.status(400).send({"log": "Error: "+ err});
                                                return
                                            }else if(results){
                                                PlaceCard(response,MatchID,PlayerID,CardID,location,RemainingR)
                                            }else{
                                                response.status(400).send({"log": results});
                                                return
                                            }
                                        })
                                    }else{
                                        response.status(400).send({"log": "You don't have enough resources to buy this Unit: "+UnitCost})
                                        return
                                    }
                                    }else{
                                        response.status(400).send({"log": "Couldn't Find Resources of Player: "+VarTable[1]+" from Match:"+VarTable[2]})
                                        return
                                    }
                        })
                    }else{
                        response.status(400).send({"log": "Spawn Cost Couldn't be found or Card Role doesn't fit ur Role"})
                        return
                    }
                })
            }else{
                response.status(400).send({"log": "Can't Find Card Role"})
                return
            }
        }
    )
}
function SwitchGameState(response,Turn,Match)
{
    connection.execute('SELECT Match_GameStateID FROM match_ WHERE MatchID = ?',
    [Match],
    function (err, results, fields) {
        var GameState = 0
        if (results.length > 0){
            if (results[0].Match_GameStateID == 2){
                GameState = 3
            }else if(results[0].Match_GameStateID == 3){
                GameState = 2
            }else{
            response.status(400).send({"log": "Error: "+err})
            }
            connection.execute('UPDATE match_ SET Match_GameStateID = ? Where MatchID = ?',
            [GameState,Match],
            function (err, results, fields) {
                if (err){
                    response.status(400).send(err);
                    return
                }else{
                    if (GameState == 2){
                        ResetResource(response,Turn,Match)
                    }else if (GameState == 3){
                        response.status(200).send({"log":"Turn End"})
                        return
                    }

                }
            });
        }else{
            response.status(400).send({"log":"No Match: '"+Match+"' Exists"});
            return
        }
    });
}
function EndTurn(Match,response,VarTable){
    var Turn = 0
    var GameState = VarTable["GameST"]
    if (GameState == 3){
        connection.execute('SELECT Turn FROM match_ WHERE MatchID = ?',
        [Match],
        function (err, results, fields) {
            if (results.length > 0){
            Turn = results[0].Turn + 1
            connection.execute('UPDATE match_ SET Turn = ? Where MatchID = ?',
            [Turn,Match],
            function (err, results, fields) {
                if (err){
                    response.status(400).send({"log":"Error: "+ err});
                    return
                }else{
                    SwitchGameState(response,Turn,Match)
                }
            });
            }else{
                res.status(400).send({"log":"No Match: "+Match+" Exists"});
                return
            }
        });
    }else if (GameState == 2){
        connection.execute('SELECT Turn FROM match_ WHERE MatchID = ?',
        [Match],
        function (err, results, fields) {
            if (results.length > 0){
            Turn = results[0].Turn
            SwitchGameState(response,Turn,Match)
            }else{
            res.status(400).send({"log":"No Match: "+Match+" Exists"});
            }
        })
    }else{
        res.status(400).send({"log":"Can't Play"});
    }
}
function CardCheck(Match,response,VarTable){
    var GameStatus 
    var location
    var MatchID = VarTable[0]
    var PlayerID = VarTable[1]
    var PosX = VarTable[2]
    var PosY = VarTable[3]
    var CardID = VarTable[4]
    connection.execute('SELECT Match_GameStateID FROM match_ WHERE MatchID = ?',
    [MatchID],
    function (err, results, fields) {
        if (results.length == 0){
            response.status(400).send({"log":"No Match: "+Match+" Found"});
            return
        }
        GameStatus = results[0].Match_GameStateID
        connection.execute('SELECT LocationID FROM location WHERE PosX = ? and PosY = ?',
        [PosX, PosY],
        function (err, results, fields) {
        if (results.length == 0){
            response.status(400).send({"log":"No location Found"});
            return;
        }
        location = results[0].LocationID
            connection.execute('SELECT TileBoardID FROM tileboard WHERE CurrentHealth > 0 and LocationID = ? and MatchID = ?',
            [location, MatchID],
            function (err, results, fields) {
            if (results.length == 0){
                if(GameStatus == 3 && PosX == 6){   
                    BuyCard(response,MatchID,PlayerID,CardID,location)
                }else if(GameStatus == 2 && PosX < 6){
                    BuyCard(response,MatchID,PlayerID,CardID,location)
                }else{
                        response.status(400).send({"log":"You can't play it here NERD" + GameStatus})
                        return
                }
            }else{
                response.status(400).send({"log":"There is already a card at that coordinates!"})
                return
            }
        });
    });             
});
}
function MoveCard(Match,response,VarTable){
    VarTable[2] = VarTable[2] - VarTable[4]
    if (VarTable[4] < 0 ){
        response.status(400).send({"log":"You can't move backwards"})
        return
    }
    if (VarTable["GameST"] == 2){
        response.status(400).send({"log":"Cheater! Defender can't move their units"})
        return
    }
    connection.execute('SELECT LocationID FROM location WHERE PosX = ? AND PosY = ?',
        [VarTable[2],VarTable[3]],
        function (err, results, fields) {
            if (err){
   
                response.status(400).send({"log":"Error:"+err})
                return
            }else if (results.length > 0){
                LocID = results[0].LocationID
                connection.execute('SELECT * FROM tileboard WHERE LocationID = ? and CurrentHealth > 0 and MatchID = ?',
                [LocID,Match],
                function (err, results, fields) {
                    if (err){
                        response.status(400).send({"log":"Error:"+err});
                        return
                    }else if (results.length > 0){
                        response.status(400).send({"log":"Can't place a unit in top of each other."});
                        return
                    }else{
                        connection.execute('UPDATE tileboard SET LocationID = ? WHERE TileBoardID = ? and MatchID = ? and CurrentHealth > 0',
                        [LocID,VarTable["Unit"],Match],
                        function (err, results, fields) {
                            if (err){
                                console.log("hi2")
                                response.status(400).send({"log":"Error:"+err,
                                "Resources": VarTable["Resources"]});
                                return
                            }else{
                                var result = {"log": "Moved Unit",
                                "Resources": VarTable["Resources"],}
                                CheckWin(response,Match,result)
                                return
                            }
                        })
                    }
                });
            }else{
                response.status(400).send({"log":"You can't move here."})
                return
            } 
    });   
}

function Explosion(response,TargetLocID,VarTable){
    var ExplosionDamage = 0
    connection.execute('SELECT cards.Damage, cards.CardID FROM tileboard INNER JOIN cards on tileboard.CardID = cards.CardID Where TileBoardID = ?',
    [TargetLocID],
    function (err, results, fields) {
            if (err){
                response.status(400).send({"log":"Error:"+err})
                return
            }else if (results.length > 0){
                ExplosionDamage = results[0].Damage 
                connection.execute('select TileBoardID from tileboard INNER JOIN location on tileboard.LocationID = location.LocationID where tileboard.UserID = ? and posY = ? and posX in (?+1,?-1) and CurrentHealth > 0',
                [VarTable[1],VarTable[5],VarTable[4],VarTable[4]],
                function (err, results, fields) {
                    if (results.length > 0){
                        var WhatHappened 
                        var TargetExplosiveTab = results
                        for (i=0;i<results.length;i++)
                        {
                            var TargetExplosiveID = TargetExplosiveTab[i].TileBoardID 
                            var TargetHealth
                            connection.execute('select CurrentHealth from tileboard INNER JOIN location on tileboard.LocationID = location.LocationID where TileBoardID = ?',
                            [TargetExplosiveID],
                            function (err, results2, fields) {
                                if (err){
                                    WhatHappened = err
                                    return
                                }else if(results2.length > 0){
                                    TargetHealth = results2 - ExplosionDamage 
                                    connection.execute('UPDATE tileboard SET CurrentHealth = ? WHERE TileBoardID = ? and CurrentHealth > 0',
                                        [TargetHealth,TargetExplosiveID],
                                        function (err, results3, fields) {
                                            if (err){
                                                WhatHappened = err
                                                return WhatHappened
                                            }else if(results3.length > 0){
                                                WhatHappened = "Boomm!!!!"
                                                return WhatHappened
                                            }else{
                                                WhatHappened = "Boom?"
                                                return WhatHappened
                                            }
                                        });
                                }else{
                                    WhatHappened = "No Boom?"
                                    return WhatHappened
                                }
                            })
                        }
                        response.status(200).send({"log":WhatHappened,
                        "Resources": VarTable["Resources"],})
                        return
                    }else{
                        response.status(400).send({"log":"No Target in range | Explosive"})
                        return
                    }
                })
            }
    })
}

function AttackTarget(response,TargetLocID,TargetHealth,VarTable){
    var Damage = 1
    console.log(VarTable["Unit"])
    console.log(TargetLocID)
    connection.execute('SELECT cards.Damage, cards.CardID FROM tileboard INNER JOIN cards on tileboard.CardID = cards.CardID Where TileBoardID = ?',
    [VarTable["Unit"]],
    function (err, results, fields) {
            if (err){
                response.status(400).send({"log":"Error:"+err})
                return
            }else if (results.length > 0){
                Damage = results[0].Damage
                TargetHealth = TargetHealth - Damage
                    connection.execute('UPDATE tileboard SET CurrentHealth = ? WHERE TileBoardID = ? and CurrentHealth > 0',
                    [TargetHealth,TargetLocID],
                    function (err, results, fields) {
                    if (err){
                        response.status(400).send({"log":"Error:"+err})
                        return
                    }else if(results){
                        console.log(results)
                        if (TargetHealth <= 0){
                            connection.execute('SELECT cards.AttackTypeID FROM tileboard INNER JOIN cards on tileboard.CardID = cards.CardID Where tileboardID = ?',
                            [TargetLocID],
                            function (err, results, fields) {
                                if (results[0].AttackTypeID == 3){
                                    Explosion(response,TargetLocID,VarTable)
                                }else{
                                    response.status(200).send({"log":"You killed the unit :D",
                                    "Resources": VarTable["Resources"],});
                                    return;
                                }
                            })
                        }else{
                            response.status(200).send({"log":"You Damaged the unit :D",
                            "Resources": VarTable["Resources"],});
                            return
                        }
                    }else{
                        response.status(400).send({"log":"No Unit Damaged"})
                        return
                    }
                });
            };
    });
}

function CheckTarget(Match,response,VarTable){
    var TargetPosX = VarTable[4]
    var TargetPosY = VarTable[5]

    if (VarTable[2] > TargetPosX && VarTable["GameST"] == 2){
        response.status(400).send({"log":"You Can't Attack units Behind"})
        return
    }else if (VarTable[2] < TargetPosX && VarTable["GameST"] == 3){
        response.status(400).send({"log":"You can't Attack units Behind"})
        return
    }

    var TargetLocID 
    var AttackType

    connection.execute('SELECT LocationID FROM location WHERE PosX = ? AND PosY = ?',
    [TargetPosX,TargetPosY],
    function (err, results, fields) {
        if (err){
            response.status(400).send({"log":"Error:"+err})
            return
        }else if (results.length > 0){
            TargetLocID = results[0].LocationID
            TargetHealth = 0
            connection.execute('SELECT cards.AttackTypeID FROM tileboard INNER JOIN cards on tileboard.CardID = cards.CardID Where tileboardID = ?',
            [VarTable["Unit"]],
            function (err, results, fields) {
                if (results.length > 0){
                    AttackType = results[0].AttackTypeID
                    if (AttackType == 2){
                        if(VarTable["GameST"] == 2){
                            connection.execute('select TileBoardID, CurrentHealth from tileboard INNER JOIN location on tileboard.LocationID where tileboard.MatchID = ? and tileboard.LocationID = location.LocationID and posY = ? and tileboard.UserID != ? and CurrentHealth > 0 order by PosX',
                            [VarTable[0],VarTable[3],VarTable[1]],
                            function (err, results, fields) {
                                if (results.length > 0){
                                    TargetLocID = results[0].TileBoardID
                                    TargetHealth = results[0].CurrentHealth
                                    AttackTarget(response,TargetLocID,TargetHealth,VarTable)
                                    return
                                }else{
                                    response.status(400).send({"log":"No Target selected| Range Defender"})
                                    return
                                }
                            })
                        }else{
                            console.log(VarTable)
                            connection.execute('select TileBoardID, CurrentHealth from tileboard INNER JOIN location on tileboard.LocationID where tileboard.MatchID = ? and tileboard.LocationID = location.LocationID and posY = ? and tileboard.UserID != ? and CurrentHealth > 0 order by PosX Desc',
                            [VarTable[0],VarTable[3],VarTable[1]],
                            function (err, results, fields) {
                                if (results.length > 0){
                                    TargetLocID = results[0].TileBoardID
                                    TargetHealth = results[0].CurrentHealth
                                    AttackTarget(response,TargetLocID,TargetHealth,VarTable)
                                    return;
                                }else{
                                    response.status(400).send({"log":"No Target selected| Range Attacker"})
                                    return
                                }
                            })
                        }
                    }
                    if (AttackType == 1){
                        if(VarTable["GameST"] == 2){
                            connection.execute('select TileBoardID, CurrentHealth from tileboard INNER JOIN location on tileboard.LocationID where tileboard.LocationID = location.LocationID and posY = ? and posX = ?+1 and tileboard.UserID != ? and CurrentHealth > 0 and tileboard.MatchID = ?',
                            [VarTable[3],VarTable[2],VarTable[1],VarTable[0]],
                            function (err, results, fields) {
                                if (results.length > 0){
                                    TargetLocID = results[0].TileBoardID
                                    TargetHealth = results[0].CurrentHealth
                                    AttackTarget(response,TargetLocID,TargetHealth,VarTable)
                                    return
                                }else{
                                    response.status(400).send({"log":"No Target in range| Melee Defender"})
                                    return
                                }
                            })
                        }else{
                            connection.execute('select TileBoardID, CurrentHealth from tileboard INNER JOIN location on tileboard.LocationID where tileboard.LocationID = location.LocationID and posY = ? and posX = ?-1 and tileboard.UserID != ? and CurrentHealth > 0 and tileboard.MatchID = ?',
                            [VarTable[3],VarTable[2],VarTable[1],VarTable[0]],
                            function (err, results, fields) {
                                if (results.length > 0){
                                    TargetLocID = results[0].TileBoardID
                                    TargetHealth = results[0].CurrentHealth
                                    AttackTarget(response,TargetLocID,TargetHealth,VarTable)
                                    return
                                }else{
                                    response.status(400).send({"log":"No Target in range| Melee Attacker"})
                                    return
                                }
                            })
                        }
                    }
                    else if (AttackType == undefined){
                        response.status(400).send({"log":"Idk: "+ AttackType + " " + err})
                        return
                    }
                }else{
                    response.status(400).send({"log":"No AttackTypes Selected "+ AttackType + " " + err})
                    return 
                }
            })
        }else{
            response.status(400).send({"log":"No Location Here :("+ VarTable})
            return
        }
    });
}

//End Points
router.put('/MoveCard', (request, response) => {
    var PlayerID = request.body.PlayerID
    var Match = request.body.MatchID
    var PosX = request.body.PosX
    var PosY = request.body.PosY
    var tilesmoved = request.body.moves
    var VarTable = [Match,PlayerID,PosX,PosY,tilesmoved]
    VarTable["Action"] = MoveCard
    VarTable["NumOfActions"] = tilesmoved
    var func = SelectCard
    CheckTurn(response,func,VarTable)
});
router.put('/AttackUnit', (request, response) => {
    var PlayerID = request.body.PlayerID
    var Match = request.body.MatchID
    var PosX = request.body.PosX
    var PosY = request.body.PosY
    var TargetPosX = request.body.TargetPosX
    var TargetPosY = request.body.TargetPosY
    var VarTable = [Match,PlayerID,PosX,PosY,TargetPosX,TargetPosY]
    VarTable["Action"] = CheckTarget
    VarTable["NumOfActions"] = 1
    var func = SelectCard
    CheckTurn(response,func,VarTable)
});
router.post("/PlaceCard",(request,response)=>{
    var PosX = request.body.PosX
    var PosY = request.body.PosY
    var Match = request.body.MatchID
    var PlayerID = request.body.PlayerID
    var CardID = request.body.CardID
    var VarTable
    VarTable = [Match,PlayerID,PosX,PosY,CardID]
    VarTable["Action"] = undefined
    var func = CardCheck
    CheckTurn(response,func,VarTable)
});

router.put("/EndTurning",(request,response)=>{
    var PlayerID = request.body.PlayerID;
    var Match = request.body.MatchID;
    var VarTable
    VarTable = [Match,PlayerID]
    var func = EndTurn
    CheckTurn(response,func,VarTable)
});

router.get("/GetTileboard/:MatchID",(req,res)=>{
    var Match = req.params.MatchID;
    connection.execute('SELECT tileboard.TileBoardID,cards.cardID,tileboard.CurrentHealth,cards.Health,location.PosX,location.PosY FROM tileboard INNER JOIN cards on tileboard.cardID = cards.cardID INNER JOIN location on tileboard.LocationID = location.LocationID Where tileboard.MatchID = ? and tileboard.CurrentHealth > 0',
    [Match],
        function (err, results, fields) {
        if (err){res.status(400).send({"log":err});return;}
        else if (results){
                res.status(200).send({"log":results});
            }
        }
    )
})
router.get("/match/:MatchID/player/:PlayerID",(req,res)=>{
    var PlayerID = req.params.PlayerID;
    var Match = req.params.MatchID;
    var Role = 0;
    var GameStatus = 0;
    var CurrentResources = 0;
    var YourTurn = false;
    connection.execute('SELECT * FROM playermatch WHERE MatchID = ?',
    [Match],
    function (err, results1, fields) {
        if (err){res.status(400).send(err);return;}
        if (results1.length > 0){
            connection.execute('SELECT * FROM match_ WHERE MatchID = ?',
            [Match],
            function (err, results, fields) {
                if (err){res.status(400).send(err);return;}
                if (results.length > 0){
                    GameStatus = results[0].Match_GameStateID
                    var Num = 1
                    if (results1[0].UserID == PlayerID){
                        Num = 0
                    }else if(results1[1].UserID == PlayerID){
                        Num = 1
                    }
                    Role = results1[Num].RolesID
                    CurrentResources = results1[Num].Resources
                    if (Role == 1 && GameStatus == 2){
                        {
                            YourTurn = true
                        }
                    }else if(Role == 2 && GameStatus == 3)
                        {
                            YourTurn = true
                        }
                    var result ={
                        "authenticated": true,
                        "log": results1,
                        "UserNum": Num,
                        "Turn": results[0].Turn,
                        "YourTurn": YourTurn,
                        "Role": Role,
                        "Resources": CurrentResources,
                        "Results" : 0,
                     }
                    CheckWin(res,Match,result)
                    return
                }else{
                    res.status(400).send({"log":"No Match: '"+Match+"' Exists or " + err});
                    return
                }
            });
        }else{
            res.status(400).send({"log":"No Match: '"+Match+"' Exists, Error: "+err});
            return
        }
    });
});
router.get("/GetUsernames/:MatchID",(req,res)=>{
    var Match = req.params.MatchID;
    connection.execute('SELECT User_id,Username,RolesID FROM playermatch INNER JOIN users WHERE playermatch.UserID = users.User_id and MatchID = ?',
    [Match],
    function(err,results,fields){
        if (err){res.status(400).send(err);return;}
        else if(results.length > 0){
            res.status(200).send(results)
        }
        else
        {res.status(400).send("No Results :|")}
    })
})

module.exports = router;