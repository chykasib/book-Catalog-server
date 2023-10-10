"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/create-book", book_controller_1.createBookController.createBook);
router.get("/getall-book", book_controller_1.createBookController.getAllBook);
router.get("/getSingle-book/:id", book_controller_1.createBookController.getSingleBook);
router.patch("/updateBook/:id", book_controller_1.createBookController.updateSingleBook);
router.delete("/deleteBook/:id", book_controller_1.createBookController.deleteBook);
exports.BookRoutes = router;
