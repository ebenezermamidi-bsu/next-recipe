//export const dynamic = 'force-dynamic'
export const dynamic = 'force-static'

import { initDB } from '@/db/init'
import { listAllPosts, createPost } from '@/data/posts'
export async function GET(request) {
  await initDB()
  const posts = await listAllPosts()
  return Response.json({ posts, currentTime: Date.now() })
}
export async function POST(request) {
  await initDB()
  const data = await request.json()
  const post = await createPost(data.userId, {
    title: data.title,
    content: data.content,
  })
  return new Response(JSON.stringify(post), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
