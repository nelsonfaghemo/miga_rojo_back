// let express = require('express');
import express from "express";
import userRouter from "./users.js";
import authorRouter from "./authors.js";
import categoriesRouter from "./categories.js";
import chapterRouter from "./chapters.js";
import mangaRouter from "./mangas.js";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Minga API", subtitle: "Endpoints of Migna" });
});

router.use("/auth", userRouter);
router.use("/authors", authorRouter);
router.use("/categories", categoriesRouter);
router.use("/chapters", chapterRouter);
router.use("/mangas", mangaRouter);

export default router;
