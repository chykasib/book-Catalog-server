import { BookSearchableFields } from "./Book.constant";
import { IBook, IBookFilters } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook> => {
  const result = await Book.create(book);
  return result;
};

export const getAllBook = async (): Promise<IBook[]> => {
  const result = await Book.find();
  return result;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
