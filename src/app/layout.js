import { Navigation } from '@/components/Navigation'
import { cookies } from 'next/headers'
import { getUserInfoByToken } from '@/data/users'
import { Are_You_Serious } from 'next/font/google'
import Image from 'next/image'
import logo from './logo.jpg'

const serious = Are_You_Serious({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: 'My Next Blog App',
  description: 'A blog app built with Next.js',
}

async function logoutAction() {
  'use server'
  cookies().delete('AUTH_TOKEN', { path: '/' })
}

export default async function RootLayout({ children }) {
  const token = cookies().get('AUTH_TOKEN')
  const user = await getUserInfoByToken(token?.value)

  return (
    <html lang='en' className={serious.className}>
      <body>
        <Image src={logo} alt='Logo' width={50} height={50} />
        <nav>
          <Navigation username={user?.username} logoutAction={logoutAction} />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
