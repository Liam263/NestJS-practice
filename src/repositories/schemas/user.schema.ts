import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: String,
    password: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true,
  },
);
