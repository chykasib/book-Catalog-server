import mongoose from "mongoose";

export interface IBook {
  _id: mongoose.Types.ObjectId;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  details: string;
}
