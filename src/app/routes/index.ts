import express from "express";
import { BookRoutes } from "../modules/Book/book.route";
import { CommentRoutes } from "../modules/Comment/comment.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/comments",
    route: CommentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
