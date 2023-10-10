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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookService = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield book_model_1.default.create(book);
    if (!createdBook) {
        throw new Error("Could not create book");
    }
    return createdBook;
});
const getAllBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield book_model_1.default.find();
    if (!createdBook) {
        throw new Error("Could not find any book");
    }
    return createdBook;
});
const getSingleBook = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield book_model_1.default.findById(params);
    if (!createdBook) {
        throw new Error("Could not find any book");
    }
    return createdBook;
});
const updateSingleBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateBook = yield book_model_1.default.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!updateBook) {
        throw new Error("Something went wrong");
    }
    return updateBook;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteBook = yield book_model_1.default.findByIdAndDelete({ _id: id });
    if (!deleteBook) {
        throw new Error("Something went wrong");
    }
    return deleteBook;
});
exports.createBookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteBook,
};
