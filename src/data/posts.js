import 'server-only'
import { Post } from '@/db/models'
export async function createPost(userId, { title, content }) {
  const post = new Post({ title, content, author: userId })
  await post.save()
  return post
}
export async function listAllPosts() {
  return await Post.find({})
    .sort({ createdAt: 'descending' })
    .populate('author', 'username')
    .lean()
}
export async function getPostById(postId) {
  return await Post.findById(postId).populate('author', 'username').lean()
}
export async function deletePostById(postId) {
  return await Post.findByIdAndDelete(postId)
}
export async function updatePostById(postId, { title, content }) {
  return await Post.findByIdAndUpdate(
    postId,
    { title, content },
    { new: true },
  ).lean()
}
