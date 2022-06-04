const express = require("express");
const blogRouter = express.Router();
const { Blog } = require("../models/index");
const mongoose = require("mongoose");
const { customError, errors } = require("../helpers/errors");

blogRouter.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    res.send(blogs);
  } catch (err) {
    next(customError(522, "Server_Error", "something went wrong"));
  }
});

blogRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) throw customError(422, "ID_NOT_FOUND", "NO_SUCH_Blog");
    res.send(blog);
  } catch (err) {
    next(err);
  }
});

blogRouter.get("/comments/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const comments = await Blog.findById(id, { comments: 1, _id: 0 });
    if (!comments) throw customError(422, "ID_NOT_FOUND", "NO_SUCH_Blog");
    res.send(comments);
  } catch (err) {
    next(err);
  }
});

blogRouter.get("/author/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Blog.findById(id, { user: 1, _id: 0 });
    if (!author) throw customError(422, "ID_NOT_FOUND", "NO_SUCH_Blog");
    res.send(author);
  } catch (err) {
    next(err);
  }
});

blogRouter.post("/", async (req, res, next) => {
  try {
    const { title, body, comments, date } = req.body;
    await Blog.create({ title, body, comments, date });
    res.send({ succes: "blog added successfully" });
  } catch (err) {
    next(err);
  }
});

authorRouter.post("/comments/:id", async (req, res, next) => {
  let _id = req.params.id;
  const newcommentData = req.body;
  try {
    const exists = await authorModel.findById({ _id });
    if (!exists) {
      throw customError(400, "NOT_FOUND", "No such blog");
    }

    await Blog.updateMany({ _id: id }, { $push: { comments: newcommentData } });
    res.send({ success: "comment added successfully" });
  } catch (error) {
    next(error);
  }
});

blogRouter.patch("/:id", async (req, res, next) => {
  let _id = req.params.id;
  const newblogData = req.body;
  try {
    const exists = await Blog.findById({ _id });
    if (!exists) {
      throw customError(400, "NOT_FOUND", "No such Blog");
    }

    await Blog.findOneAndUpdate({ _id }, newblogData);
    res.send({ success: "blog updated successfully" });
  } catch (error) {
    next(error);
  }
});

blogRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    blog.deleteOne(
      {
        _id: id,
      },
      (err, output) => {
        if (!err) {
          res.send(output);
        } else {
          res.send(err);
        }
      }
    );
  } catch (err) {
    next(err);
  }
});
