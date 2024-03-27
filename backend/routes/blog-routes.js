// import express from 'express';
// import { addBlog, getAllBlogs} from "../controllers/blog-controller";
// const blogRouter = express.Router();

// blogRouter.get("/", getAllBlogs);
// blogRouter.post("/add", addBlog);

// export default blogRouter;

const express = require('express');
const { addBlog, getAllBlogs, updateBlog, getById, deleteBlog, getByUserId} = require("../controllers/blog-controller");
const blogRouter = express.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId);

module.exports = blogRouter;
