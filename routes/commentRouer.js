const express = require("express");
const commentRouter = express.Router();
const { Comment } = require("../models/index");
const mongoose = require("mongoose");
commentRouter.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find({});
    res.send(comments);
  } catch (err) {
    next(customError(522, "Server_Error", "something went wrong"));
  }
});
