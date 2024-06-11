const express = require('express')
const router = express.Router();
const connection = require('../database')
function CreateMatch(res,req){
    var playerID = req.session.PlayerID;
    connection.execute('INSERT INTO match_ (Match_GameStateID, Turn) VALUES (?,?)',
    [2,1],
    function(err,result1,fields){
        if (err){
            res.status(400).send({
                "log": "Error_PlayerMatch1:"+err,
                "MatchID": MatchID,
                "InMatch": false,
                "Joined": false,
                "userID": playerID,
            })
        }else if(result1){
            var MatchID = result1.insertId
            connection.execute('INSERT INTO playermatch (UserID, MatchID, Resources, RolesID) VALUES (?,?,?,?)',
            [playerID,MatchID,1,1],
            function(err,result,fields){
                if (err){
                    res.status(400).send({
                        "log": "Error_PlayerMatch2:"+err,
                        "MatchID": MatchID,
                        "InMatch": false,
                        "Joined": false,
                        "userID": playerID,
                    })
                }else if(result){
                    res.status(200).send({
                        "log": "Matched Created and Joined",
                        "MatchID": MatchID,
                        "InMatch": true,
                        "Joined": false,
                        "userID": playerID,
                    })
                }
            })  
        }
    })
}
function JoinMatch(res,req,result){
    var MatchID = result[0].MatchID
    var playerID = req.session.PlayerID;
    connection.execute('INSERT INTO playermatch (UserID, MatchID, Resources, RolesID) VALUES (?,?,?,?)',
            [playerID,MatchID,1,2],
            function(err,results,fields){
                if(results){
                    res.status(200).send({
                        "log": "Matched Joined",
                        "MatchID": MatchID,
                        "InMatch": true,
                        "Joined": true,
                        "userID": playerID,
                    })
                }else{
                    res.status(200).send({
                        "log": "In Queue",
                        "Error": err,
                        "MatchID": MatchID,
                        "InMatch": true,
                        "Joined": false,
                        "userID": playerID,
                    })
                }
            }) 
}
router.post('/EnterMatch',(req,res)=>{
    var playerID = req.session.PlayerID;
    if (!playerID){
        res.status(400).send({
            "log": "No PlayerID",
            "InMatch": false,
            "Joined": false,
            "userID": null,
            "userID": undefined,
        })
        return;
    }
    connection.execute('SELECT MatchID, count(*) as PlayerCount FROM playermatch GROUP BY MatchID having count(*) < 2',
    [],
    function(err,result,fields){
        if(err){
            res.status(400).send({
                
                "log": err,
                "InMatch": false,
                "Joined": false,
                "userID": undefined,
            })
        }
        else if (result.length > 0){
            JoinMatch(res,req,result)
        }
        else if(result.length <= 0){
            CreateMatch(res,req)
        }
    })
});

router.get('/CheckMatch:MatchID',(req,res)=>{ 
    var MatchID = req.params.MatchID;
    var PlyID = req.session.PlayerID;
    connection.execute('SELECT MatchID, count(*) as PlayerCount FROM playermatch where MatchID = ? GROUP BY MatchID having count(*) = 2 ',
    [MatchID],
    function(err,result,fields){
        if(err){
            res.status(400).send({
                "log": err,
                "MatchReady": false,
                "userID": PlyID
            })
        }
        else if (result.length > 0){
            res.status(200).send({
                "log": "Match Found",
                "MatchReady": true,
                "userID": PlyID
            })
        }
        else{
            res.status(400).send({
                "log": "Waiting for match",
                "MatchReady": false,
                "userID": PlyID
            })
        }
    })
});
module.exports = router;
