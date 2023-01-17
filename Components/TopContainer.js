'use client'

import { useState } from 'react'
import { Topbar, ColorModeContext, useMode } from './Topbar.js'
import MySidebar from './Sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'

const TopbarContainer = ({ children }) => {
  const { theme, colorMode } = useMode()
  const [isSidebar, setIsSidebar] = useState(true)

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
          <MySidebar isSidebar={isSidebar} />
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
}

export default TopbarContainer
