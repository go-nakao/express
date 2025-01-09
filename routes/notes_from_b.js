var express = require('express');
var router = express.Router();
const cors = require('cors');

//corsミドルウェアを利用
router.use(cors());

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://2101120810ns:PVMmHHNZKa95YcDH@cluster0.zwxy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  // データベース、コレクションを指定
  const database = client.db('notes');
  const notes = database.collection('notes');

  const note = await notes.find({}).toArray();
  res.json(note);
})

module.exports = router;
