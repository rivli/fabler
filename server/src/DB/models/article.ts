import { Schema, model } from "mongoose";

const ArticleSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("article", ArticleSchema);
