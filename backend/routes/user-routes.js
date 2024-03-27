// import express from "express";
// import { getAllUser, login, signup } from "../controllers/user.controller.js";

// const router = express.Router();

// router.get("/", getAllUser);
// router.post("/signup", signup);
// router.post("/login", login)
// export default router;


const express = require("express");
const { getAllUser, login, signup } = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
