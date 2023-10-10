import { IBook } from "./book.interface";
import Book from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {
  const createdBook = await Book.create(book);
  if (!createdBook) {
    throw new Error("Could not create book");
  }

  return createdBook;
};
const getAllBook = async (): Promise<IBook[] | null> => {
  const createdBook = await Book.find();
  if (!createdBook) {
    throw new Error("Could not find any book");
  }

  return createdBook;
};
const getSingleBook = async (params: string): Promise<IBook | null> => {
  const createdBook = await Book.findById(params);
  if (!createdBook) {
    throw new Error("Could not find any book");
  }

  return createdBook;
};
const updateSingleBook = async (
  id: string,
  payload: IBook
): Promise<IBook | null> => {
  const updateBook = await Book.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!updateBook) {
    throw new Error("Something went wrong");
  }

  return updateBook;
};
const deleteBook = async (id: string): Promise<IBook | null> => {
  const deleteBook = await Book.findByIdAndDelete({ _id: id });
  if (!deleteBook) {
    throw new Error("Something went wrong");
  }

  return deleteBook;
};

export const createBookService = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteBook,
};
