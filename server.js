const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
var app = express();

var dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',    
    database: 'welisten'
});

dbConnect.connect(function(err) {
    if(err) {
        console.log("Did not connect to database");
    } else {
        console.log("Connected to the database");
    }    
});

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
})

app.listen(8080, function(err) {
    if(err) console.log("Did not connect to server");
    console.log("Started application on port 8080");
});