const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: String,
  description: String,
});

// 모듈 꺼내기
module.exports = mongoose.model("Board", boardSchema);
