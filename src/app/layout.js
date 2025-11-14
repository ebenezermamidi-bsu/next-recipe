export const metadata = {
  title: 'My Next Blog App',
  description: 'A blog app built with Next.js',
}
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
