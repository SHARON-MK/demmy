const express = require('express');
const bodyParser =require('body-parser');
const session = require('express-session');
const indexRouter = require('./routes/login');
const usersRouter = require('./routes/home');
const path = require('path');

const app = express()
const port = 5000


app.use(session({secret:'salah',saveUninitialized:true,resave:false,cookie:({maxAge:120000})}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req,res,next)=>{
    res.set('Cache-control','no-store,no-cache')
    next()
})



app.set('view engine' , 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);





app.listen(port, () => console.log(`Example app listening on port ${port}!`));