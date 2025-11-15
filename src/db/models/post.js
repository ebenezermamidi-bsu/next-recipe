import 'server-only'
import mongoose, { Schema } from 'mongoose'
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  { timestamps: true },
)
export const Post = mongoose.models.post ?? mongoose.model('post', postSchema)
