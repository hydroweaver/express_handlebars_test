//created this file to test express serving an html file and using
// static to serve the related insert.js
// if app.use (static) is not used, the insert.js file does not work

const express = require('express')
const path = require('path')

app = express()

app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/main.html'));
})

app.listen(3000, ()=>{
    console.log('Running on local at 3000');
});