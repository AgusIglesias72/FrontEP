'use client'

import { useState } from 'react'
import { Topbar, ColorModeContext, useMode } from './Topbar.js'
import MySidebar from './Sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useSession, signOut } from 'next-auth/react'
import Login from '../app/login/page.js'

const AUTH_USERS = ['enpalabrass@gmail.com', 'agusiglesias72@gmail.com']

const TopbarContainer = ({ children }) => {
  const { theme, colorMode } = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

  const { data: session, status } = useSession()

  if (status === 'authenticated' && AUTH_USERS.includes(session?.user?.email)) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              display: 'flex',
              position: 'relative',
            }}
          >
            <MySidebar
              isSidebar={isSidebar}
              imageUrl={session?.user?.image}
              userName={session?.user?.name}
            />
            <main
              style={{
                height: '100%',
                width: '100%',
                fontFamily: 'Roboto',
              }}
            >
              <Topbar />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
  } else if (!AUTH_USERS.includes(session?.user?.email)) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Login />
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
  } else {
    return <div>Cargando...</div>
  }
}

export default TopbarContainer
