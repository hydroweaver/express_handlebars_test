const { Router } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');

app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', require('./routes/members'));
app.use('/', require('./routes/tutorials'));

app.get('/', (req, res)=>{
    // res.render('home');
    res.send('Home Get')
}).listen(3000, ()=>{
    console.log('Listening at 3000');
})