import express from "express";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the post route!" });
});

export default postRouter;
