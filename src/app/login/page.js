import { Login } from '@/components/Login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { loginUser } from '@/data/users'
import { initDB } from '@/db/init'

export async function loginAction(prevState, formData) {
  'use server'
  let token
  try {
    await initDB()
    const username = formData.get('username')
    const password = formData.get('password')
    token = await loginUser({ username, password })
    if (token) {
      cookies().set({
        name: 'AUTH_TOKEN',
        value: token,
        path: '/',
        maxAge: 60 * 60 * 24,
        secure: true,
        httpOnly: true,
      })
      redirect('/')
    } else {
      throw new Error('Invalid username or password')
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default function LoginPage() {
  return <Login loginAction={loginAction} />
}
