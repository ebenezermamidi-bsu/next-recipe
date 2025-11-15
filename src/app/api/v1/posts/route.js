import { initDB } from '@/db/init'
import { listAllPosts, createPost } from '@/data/posts'
export async function GET(request) {
  await initDB()
  const posts = await listAllPosts()
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
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
