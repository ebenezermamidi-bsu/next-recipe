import { CreatePost } from '@/components/CreatePost'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserIdByToken } from '@/data/users'
import { initDB } from '@/db/init'
import { createPost } from '@/data/posts'
import { revalidateTag } from 'next/cache'

export default async function CreatePostPage() {
  async function createPostAction(data) {
    'use server'

    await initDB()
    const token = cookies().get('AUTH_TOKEN')?.value
    const userId = token ? await getUserIdByToken(token) : null
    if (!userId) {
      redirect('/login')
    }
    const post = await createPost(userId, {
      title: data.get('title'),
      content: data.get('content'),
    })
    revalidateTag('posts')
    redirect(`/posts/${post.id}`)
  }
  return <CreatePost createPostAction={createPostAction} />
}
