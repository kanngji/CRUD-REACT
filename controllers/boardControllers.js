const Board = require("../models/boardModel");
const mongoose = require("mongoose");

const getAllBoard = async (req, res) => {
  Board.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const postBoard = async (req, res) => {
  Board.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

// 모듈 꺼내기
module.exports = { postBoard, getAllBoard };
