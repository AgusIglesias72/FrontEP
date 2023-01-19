'use client'
import TopbarContainer from '../Components/TopContainer.js'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({ children, session }) {
  return (
    <html>
      <head>
        <title>Next.js</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SessionProvider session={session}>
          <TopbarContainer>{children}</TopbarContainer>
        </SessionProvider>
      </body>
    </html>
  )
}
