import { FullPost } from '@/components/FullPost'
import { notFound } from 'next/navigation'
import { getPostById } from '@/data/posts'
import { initDB } from '@/db/init'

export default async function ViewPostPage({ params }) {
  await initDB()

  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <FullPost
        title={post.title}
        content={post.content}
        author={post.author}
      />
    </div>
  )
}
