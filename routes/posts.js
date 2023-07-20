import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

///READ///
router.get("/", verifyToken, getFeedPosts);
//when we go to any person's profile it can grab only that user post
router.get("/:userId/posts", verifyToken, getUserPosts);

///UPDATE///
router.patch("/:id/like", verifyToken, likePost);

export default router;
