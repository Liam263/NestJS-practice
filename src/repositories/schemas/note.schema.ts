import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const NoteSchema = new Schema({
  name: String,
  description: String,
  createdAt: { type: Date, default: Date.now() },
});
