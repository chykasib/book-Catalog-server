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
exports.commentService = void 0;
const comments_model_1 = __importDefault(require("./comments.model"));
const createComment = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield comments_model_1.default.create(comment);
    if (!createdBook) {
        throw new Error("Could not create Comment");
    }
    return createdBook;
});
const getComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comments_model_1.default.find({ id: id });
    if (!result) {
        throw new Error("Could not find Comment");
    }
    return result;
});
exports.commentService = {
    createComment,
    getComment,
};
