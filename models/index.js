const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  isSuspended: {
    type: Boolean,
    required: true,
  },
});

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  date: {
    type: Date,
    required: true,
  },
});

const CommentSchema = new Schema({
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  date: Date,
});

const User = mongoose.model("User", UserSchema);
const Blog = mongoose.model("Blog", BlogSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { User, Blog, Comment };
