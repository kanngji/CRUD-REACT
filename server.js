require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { postBoard } = require("./controllers/boardControllers");

const app = express();
const port = 4000;

// routes 의 boards를 가져옵니다
const boardRoutes = require("./routes/board");

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/board", boardRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    })
  )
  .catch((err) => console.log(err));
