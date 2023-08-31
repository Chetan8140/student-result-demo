var express = require('express');
var router = express.Router();
var fs = require('fs')

const data  = fs.readFileSync('./data.json','utf-8')
const allData = JSON.parse(data)
console.log(allData); 

router.get('/', function(req, res, next) {
  res.render('result', { data : allData});
});
router.get('/detail',function(req,res,next){
  console.log(req.query.no);
  let index = allData[req.query.no]
  res.render('detail',{ all : index })
});
router.get('/add',function(req,res,next){
  console.log(req.query);
  allData.push(req.query)
  fs.writeFileSync('./data.json',JSON.stringify(allData),'utf-8')
  res.redirect('/')
});
router.post('/add', function(req,res,next) {
  console.log(req.body);
  allData.push(req.body)
  fs.writeFileSync('./data.json', JSON.stringify(allData), 'utf-8')
  res.redirect('/')
});

module.exports = router;
