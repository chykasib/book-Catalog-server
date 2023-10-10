import { Request, Response } from "express";
import { createBookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const result = await createBookService.createBook(req.body);
    res.status(200).json({
      success: true,
      message: "Books created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create Book",
    });
  }
};
const getAllBook = async (req: Request, res: Response) => {
  try {
    const result = await createBookService.getAllBook();
    res.status(200).json({
      success: true,
      message: "Get All Books successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all Book",
    });
  }
};
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const params = req.params.id;
    const result = await createBookService.getSingleBook(params);
    res.status(200).json({
      success: true,
      message: "Get All Books successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to get all Book",
    });
  }
};
const updateSingleBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedBook = req.body;
    const result = await createBookService.updateSingleBook(id, updatedBook);
    res.status(200).json({
      success: true,
      message: "updated Book successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update Book",
    });
  }
};
const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await createBookService.deleteBook(id);
    res.status(200).json({
      success: true,
      message: "Deleted Book successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to delete Book",
    });
  }
};

export const createBookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteBook,
};
