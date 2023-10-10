import express from "express";
import { createCommentController } from "./comment.controller";

const router = express.Router();

router.post("/create-comment", createCommentController.createComment);
router.get("/getall-comment/:id", createCommentController.getComment);

export const CommentRoutes = router;
