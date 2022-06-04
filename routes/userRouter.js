const express = require("express");
const userRouter = express.Router();
const { User } = require("../models/index");
const { Blog } = require("../models/index");
const mongoose = require("mongoose");
const { customError, errors } = require("../helpers/errors");

userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    next(customError(522, "Server_Error", "something went wrong"));
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw customError(422, "ID_NOT_FOUND", "NO_SUCH_USER");
    res.send(user);
  } catch (err) {
    next(err);
  }
});

userRouter.get("/articles/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userarticles = await Blog.find({ user: id });
    if (!userarticles) throw customError(422, "ID_NOT_FOUND", "NO_SUCH_USER");
    res.send(user);
  } catch (err) {
    next(err);
  }
});
