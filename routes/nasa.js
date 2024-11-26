var express = require('express');
var router = express.Router();
const request = require('request');

//DEMO_KEYの箇所に取得したAPI KEYを入力する。
router.get('/', async (req, res) => { request('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  const data = JSON.parse(body);
  res.json(data);
  }
});
})
module.exports = router;
