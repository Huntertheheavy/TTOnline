const express = require('express')
const router = express.Router();
const connection = require('../database')

router.post("/Register",(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    if (!username || !password || !password2){
        console.log("Missing username, password or confirm password")
        res.status(400).send({
            "log": "Missing username, password or confirm password"
        });
        return;
    }

    if (password != password2){
        console.log("Passwords do not match")
        res.status(400).send({
            "log": "Passwords do not match"
        });
        return;
    }

    function CheckIfAccountExists(){
        connection.execute("select * from users where Username = ?",
        [username],
        function(err,results,fields){
            if (err){
                console.log(err)
                res.status(500).send({
                    "log": err
                });
                return
            }else if (results.length > 0){
                console.log("Username already exist")
                res.status(400).send({
                    "log": "Username already exist"
                });
                return;
            }else{
                console.log("Creating Account")
                CreateAccount()
            }
        })
    }
    function CreateAccount(){
        if (password != password2){
            console.log("Password Do not match")
            res.send("Password Do not match")
            return
        }
        connection.execute('INSERT INTO users (Username,UserPassword) VALUES (?,?)',
        [username,password],
        function(err,results,fields){
            if (err) {
                console.log(err)
                res.status(500).send({
                    "log": err
                });
            }else{
                console.log("Account created successfully")
                res.status(200).send({
                    "log": "Account created successfully"
                });
            }
        })
    }
    CheckIfAccountExists()
})
router.post("/Login",(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    if (!username || !password){
        console.log("Missing username or password")
        res.status(400).send({
            "log": "Missing username or password"
        })
        return;
    }
    function CheckIfLoginExists(){
        connection.execute("select * from users where Username = ? and UserPassword = ?",
        [username,password],
        function(err,results,fields){
            if (err){
                console.log("err")
                res.status(500).send({
                    "log": err
                });
                return;
            }else if (results.length == 0){
                console.log("Incorrect username or password")
                res.status(404).send({
                    "log": "Incorrect username or password"
                });
                return;
            }else{
                console.log(results[0])
                LogPlayerIn(results[0].User_id,results[0].Username)
            }
        })
    }
    function LogPlayerIn(PlayerID,Username){
        req.session.PlayerID = PlayerID;
        req.session.username = Username;
        res.status(200).send({
            "log": "You are Logged"
        });
        return
    }
    CheckIfLoginExists()
})

router.get('/CheckLoged', (req, res) => {
    if (req.session.PlayerID)
        res.status(200).send({
            "loggedIn": true
        });
    else
        res.status(401).send({
            "loggedIn": false
        })
})

router.get('/LogOff',(req,res)=>{
    if(req.session.PlayerID){
        req.session.username = null
        req.session.PlayerID = null
        res.status(200).send({
            "Log": "Log Off went sucessfully"
        })
    }else{
        res.status(401).send({
            "Log": "Not Even Logged in"
        })
    }
})

module.exports = router;