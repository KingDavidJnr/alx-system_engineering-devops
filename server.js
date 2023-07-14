//const fetchName = prompt('What is your name?:');
//console.log(`Hi, ${fetchName}`);
//console.log('Welcome to TechNiqr DBMS');

const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const port = 3131 || process.env.PORT;

dotenv.config();

const app = express.json();

app.get('/', (req, res) => {
    res.send('Welcome to TechNiqr DBMS')
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
