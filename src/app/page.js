import { PostList } from '@/components/PostList'
import { initDB } from '@/db/init'
import { listAllPosts } from '@/data/posts'

export default async function HomePage() {
  await initDB()

  const posts = await listAllPosts()

  return (
    <div>
      <h1>Welcome to My Next Blog App</h1>
      <PostList posts={posts} />
    </div>
  )
}
