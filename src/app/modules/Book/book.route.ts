import express from "express";
import { createBookController } from "./book.controller";

const router = express.Router();

router.post("/create-book", createBookController.createBook);
router.get("/getall-book", createBookController.getAllBook);
router.get("/getSingle-book/:id", createBookController.getSingleBook);
router.patch("/updateBook/:id", createBookController.updateSingleBook);
router.delete("/deleteBook/:id", createBookController.deleteBook);

export const BookRoutes = router;
