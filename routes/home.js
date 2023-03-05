var express = require('express');
var router = express.Router();


let array = [
  {
    id: 1,
    imgLocation : "https://m.media-amazon.com/images/G/31/img21/Watches2021/Dec_22_watches/WF2/Spotlight/4._CB618117621_.gif",
    desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 2,
    imgLocation : "https://m.media-amazon.com/images/G/31/img21/Watches2021/Dec_22_watches/WF2/COOP/MEN/Citizen._SS400_QL85_.jpg",
    desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 3,
    imgLocation : "https://m.media-amazon.com/images/G/31/img21/Watches2021/Dec_22_watches/WF2/COOP/MEN/Maxima._SS400_QL85_.jpg",
    desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 4,
    imgLocation : "https://m.media-amazon.com/images/G/31/img21/Watches2021/Dec_22_watches/WF2/COOP/MEN/Shoppers-stop._SS400_QL85_.jpg",
    desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 5,
    imgLocation : "https://m.media-amazon.com/images/G/31/img21/Watches2021/Dec_22_watches/WF2/COOP/MEN/Shoppers-stop._SS400_QL85_.jpg",
    desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
   {
    id: 6,
    imgLocation : "https://m.media-amazon.com/images/G/31/img21/Watches2021/Dec_22_watches/WF2/COOP/MEN/Shoppers-stop._SS400_QL85_.jpg",
    desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]




/* GET users listing. */
router.get('/', function(req, res, next) {
  let randomNum = Math.floor(Math.random() * 100);
  if(req.session.login){
    res.render('home', { title: 'home' , num : randomNum , array});
  }else{
    res.redirect('/')
  }
});

router.get('/logout',(req,res,next)=>{
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
