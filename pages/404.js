'use client'

import TopbarContainer from '../Components/TopContainer'
import { SessionProvider } from 'next-auth/react'
import Header from '../Components/Header'
export default function Error({ session }) {
  return (
    <SessionProvider session={session}>
      <TopbarContainer>
        <div
          style={{
            margin: '20px',
          }}
        >
          <Header title="Error 404" subtitle="La página no fue encontrada" />
        </div>
      </TopbarContainer>
    </SessionProvider>
  )
}
