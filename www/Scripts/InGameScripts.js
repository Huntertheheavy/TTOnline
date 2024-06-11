
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
    xhttp.open("Post","/GameFunc/PlaceCard",true);
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
    xhttp.open("Put","/GameFunc/MoveCard",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}
function Attack(){
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
    xhttp.open("Put","/GameFunc/AttackUnit",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(Data));
}

setInterval(TimeFunc,5000)
function TimeFunc(){
    PlayerFunc()
    TileBoardFunc()
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
        xhttp.open("GET","/GameFunc/match/"+MatchID+"/player/"+PlayerID,true);
        xhttp.send();
    }
}