function Endturn(){
    console.log("Clicked To End Turn")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = JSON.parse(this.responseText)
            console.log(response)
            document.getElementById("Log").innerHTML = response.log
        }
    }
    var Data = {
        "PlayerID": document.getElementById("PlayerID").value,
        "MatchID": document.getElementById("Match").value,
    }
    console.log(Data)
    xhttp.open("PUT","/EndTurning",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}
function PlaceCard(){
    console.log("Clicked To Place")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = JSON.parse(this.responseText)
            console.log(response)
            document.getElementById("Log").innerHTML = response.log
        }
    }
    var Data = {
        "PlayerID": document.getElementById("PlayerID").value,
        "MatchID": document.getElementById("Match").value,
        "PosX": document.getElementById("PosX").value,
        "PosY": document.getElementById("PosY").value,
        "CardID": document.getElementById("CardID").value,
    }
    xhttp.open("Post","/PlaceCard",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}
function Move(){
    console.log("Clicked To Move")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = JSON.parse(this.responseText)
            console.log(response)
            document.getElementById("Log").innerHTML = response.log
        }
    }
    var Data = {
        "PlayerID": document.getElementById("PlayerID").value,
        "MatchID": document.getElementById("Match").value,
        "PosX": document.getElementById("PosX").value,
        "PosY": document.getElementById("PosY").value,
        "moves": document.getElementById("moves").value,
    }
    console.log(Data)
    xhttp.open("Put","/MoveCard",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}
function Attack(){
    console.log("Clicked To Attack")
    var xhttp = new XMLHttpRequest();
    YourTurn = false
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = JSON.parse(this.responseText)
            console.log(response)
            document.getElementById("Log").innerHTML = response.log
        }
    }
    var Data = {
        "PlayerID": document.getElementById("PlayerID").value,
        "MatchID": document.getElementById("Match").value,
        "PosX": document.getElementById("PosX").value,
        "PosY": document.getElementById("PosY").value,
        "TargetPosX": document.getElementById("TargetPosX").value,
        "TargetPosY": document.getElementById("TargetPosY").value,
    }
    xhttp.open("Put","/AttackUnit",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}
function CreateMatch(){
    console.log("Clicked To Place")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = JSON.parse(this.responseText)
            document.getElementById("Log").innerHTML = response.log
            if (response.MatchID > 0){
                document.getElementById("Match").value = response.MatchID
            }
        }
    }
    var Data = {
        "PlayerID1": document.getElementById("PlayerID1").value,
        "PlayerID2": document.getElementById("PlayerID2").value,
    }
    xhttp.open("Post","/CreateMatch",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}

setInterval(TimeFunc,5000)
function TimeFunc(){
    PlayerFunc()
    TileBoardFunc()
    MatchFunc()
}
function MatchFunc(){
    MatchID = document.getElementById("Match").value
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4){
                var response = JSON.parse(this.responseText)
                document.getElementById("NumOfMatch").innerHTML = "Total of Matches: "+ response.Matches
            }
        }
        xhttp.open("GET","/GetMatches",true);
        xhttp.send();
}
function TileBoardFunc(){
    MatchID = document.getElementById("Match").value
    if (MatchID.length > 0){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4){
                var response = JSON.parse(this.responseText)
                document.getElementById("Log").innerHTML = response.log
                for (i=1;i<=24;i++){
                    document.getElementById(i).innerHTML = "empty: " + i
                }
                for (i=0;i<response.tileboard.length;i++){
                    document.getElementById(response.tileboard[i].LocationID).innerHTML = response.tileboard[i].CardsName + "("+response.tileboard[i].CurrentHealth+"/"+response.tileboard[i].Health+")"
                }
            }
        }
            xhttp.open("GET","/match/"+MatchID,true);
            xhttp.send();
    }
}
function PlayerFunc(){
    PlayerID = document.getElementById("PlayerID").value
    MatchID = document.getElementById("Match").value
    if (PlayerID.length > 0 && MatchID.length > 0){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4){
            var response = JSON.parse(this.responseText)
            if (response.authenticated){
                if (response.YourTurn == false){
                    document.getElementById("Status").innerHTML = "Wait, it's not your Turn"
                }else{
                    document.getElementById("Status").innerHTML = "It's your Turn"
                }
                if (response.Role == 1){
                    document.getElementById("MoveButton").innerHTML
                    document.getElementById("Role").innerHTML = "You are an Defender"
                
                }else if(response.Role == 2){
                    document.getElementById("Role").innerHTML = "You are an Attacker"
                }
                document.getElementById("TurnNumber").innerHTML = "Turn: " + response.Turn;
                document.getElementById("Resources").innerHTML = "Resources: " + response.Resources;
            }
        }
    }
        xhttp.open("GET","/match/"+MatchID+"/player/"+PlayerID,true);
        xhttp.send();
    }
}