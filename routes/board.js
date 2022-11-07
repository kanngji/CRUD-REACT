const express = require("express");
const { postBoard, getAllBoard } = require("../controllers/boardControllers");

// controll functions
// const {postBoard} = require()

const router = express.Router();
router.get("/posts", getAllBoard);
router.post("/post", postBoard);

module.exports = router;
