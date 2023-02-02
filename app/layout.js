'use client'
import TopbarContainer from '../Components/TopContainer.js'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({ children, session }) {
  return (
    <html>
      <head>
        <title>Admin - EP</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="icon"
          href="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0"
        />
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
