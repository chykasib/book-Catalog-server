"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookController = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.createBookService.createBook(req.body);
        res.status(200).json({
            success: true,
            message: "Books created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to create Book",
        });
    }
});
const getAllBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.createBookService.getAllBook();
        res.status(200).json({
            success: true,
            message: "Get All Books successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to get all Book",
        });
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.params.id;
        const result = yield book_service_1.createBookService.getSingleBook(params);
        res.status(200).json({
            success: true,
            message: "Get All Books successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to get all Book",
        });
    }
});
const updateSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedBook = req.body;
        const result = yield book_service_1.createBookService.updateSingleBook(id, updatedBook);
        res.status(200).json({
            success: true,
            message: "updated Book successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to update Book",
        });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.createBookService.deleteBook(id);
        res.status(200).json({
            success: true,
            message: "Deleted Book successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to delete Book",
        });
    }
});
exports.createBookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteBook,
};
