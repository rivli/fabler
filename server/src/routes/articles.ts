import * as express from "express";
const router = express.Router();

import Article from "../DB/models/article";

// @route  POST articles/create
// @desc   Create article
// @access Private
router.post("/create", async (req, res) => {
  try {
    const newPost = new Article({
      text: req.body.text,
      title: req.body.title,
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  GET articles
// @desc   Get all articles
// @access Private
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route  GET articles/:article_id
// @desc   Get article by id
// @access Private
router.get("/:article_id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.article_id);
    if (!article) return res.status(404).json({ msg: "article not found" });
    res.json({ article });
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "article not found" });

    res.status(500).send("Server error");
  }
});

export default router;
