var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

//corsミドルウェアを利用
router.use(cors());

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI; //.envから読み込む
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notes = database.collection('notes');

  const note = await notes.find({}).toArray();
  res.json(note);
})

module.exports = router;
