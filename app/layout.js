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
      <body
        sx={{
          height: '100%',
        }}
      >
        <SessionProvider session={session}>
          <TopbarContainer>
            <div>{children}</div>
          </TopbarContainer>
        </SessionProvider>
      </body>
    </html>
  )
}
