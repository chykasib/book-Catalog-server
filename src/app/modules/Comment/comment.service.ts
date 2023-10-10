import { IComment } from "./comment.interface";
import CommentModel from "./comments.model";

const createComment = async (comment: IComment): Promise<IComment | null> => {
  const createdBook = await CommentModel.create(comment);
  if (!createdBook) {
    throw new Error("Could not create Comment");
  }

  return createdBook;
};
const getComment = async (id: string): Promise<IComment[] | null> => {
  const result = await CommentModel.find({ id: id });
  if (!result) {
    throw new Error("Could not find Comment");
  }

  return result;
};

export const commentService = {
  createComment,
  getComment,
};
