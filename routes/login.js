var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.login){
    res.redirect('/users')
  }else{
     res.render('login', { title: 'Login Page' });
  }
 
});

router.post('/login',(req,res)=>{
  const email = req.body.email
  const password = req.body.password
  const mypasword = "12345"
  const myemail = "tpjishnu5@gmail.com"
  if(myemail==email){
    if(password == mypasword){
      req.session.login = true;
      res.redirect('/users')
    }else{
      res.render('login',{error:"invalid username and password"})
    }
  }else{
    res.render('login',{error:"invalid username and password"})
  }
})
module.exports = router;