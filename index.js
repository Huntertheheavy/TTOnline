const express = require('express');
const session = require('express-session')

const Game = require('./API/GameScripts')
const LogReg = require('./API/AccountScripts')
const MatchM = require('./API/MatchScripts')
const connection = require('./database');
const port = 7500;
// Variables of the project

connection.connect((err) => {
    if (err){
        console.log("Error connection to DB: " + err);
        return;
    }
    console.log("Connected to database!");
})

const app = express();

app.use(express.static("www"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: 'JustTimeLine_Tyrants',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*24},// 24 Hours :D
}))

app.listen(port, () =>{
    console.log("Server is running on localhost " + port);
});

// Routes

app.use('/Account',LogReg)
app.use('/GameFunc',Game)
app.use('/MatchingMaking',MatchM)
