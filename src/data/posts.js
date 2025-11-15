import 'server-only'
import { Post } from '@/db/models'
import { unstable_cache as cache } from 'next/cache'

export async function createPost(userId, { title, content }) {
  const post = new Post({ title, content, author: userId })
  await post.save()
  return post
}
export const listAllPosts = cache(
  async function listAllPosts() {
    return await Post.find({})
      .sort({ createdAt: 'descending' })
      .populate('author', 'username')
      .lean()
  },
  ['posts', 'listAllPosts'],
  { tags: ['posts'] },
)
export const getPostById = cache(
  async function getPostById(postId) {
    return await Post.findById(postId).populate('author', 'username').lean()
  },
  ['posts', 'getPostById'],
)
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
