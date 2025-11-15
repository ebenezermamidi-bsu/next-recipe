import { Signup } from '@/components/Signup'
import { redirect } from 'next/navigation'
import { createUser } from '@/data/users'
import { initDB } from '@/db/init'

export async function signupAction(prevState, formData) {
  'use server'
  try {
    await initDB()
    const username = formData.get('username')
    const password = formData.get('password')
    await createUser({ username, password })
    redirect('/login')
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default function SignupPage() {
  return <Signup signupAction={signupAction} />
}
