import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  reviews?: string[];
};

export interface IBookFilters {
  title?: string;
  author?: string;
  genre?: string;
  searchTerm?: string;
}

export type BookModel = Model<IBook, Record<string, unknown>>;
