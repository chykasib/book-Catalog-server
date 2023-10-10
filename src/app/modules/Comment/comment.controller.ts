import { Request, Response } from "express";
import { commentService } from "./comment.service";

const createComment = async (req: Request, res: Response) => {
  try {
    const { comment } = req.body;
    const result = await commentService.createComment(comment);
    res.status(200).json({
      success: true,
      message: "Comment created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create Comment",
    });
  }
};
const getComment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await commentService.getComment(id);
    res.status(200).json({
      success: true,
      message: "Comment created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create Comment",
    });
  }
};

export const createCommentController = {
  createComment,
  getComment,
};
