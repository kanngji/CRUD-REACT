const express = require("express");
const {
  postBoard,
  getAllBoard,
  deleteBoard,
  updateBoard,
} = require("../controllers/boardControllers");

// controll functions
// const {postBoard} = require()

const router = express.Router();
router.get("/posts", getAllBoard);
router.post("/post", postBoard);
router.delete("/delete/:id", deleteBoard);
router.put("/update/:id", updateBoard);
module.exports = router;
