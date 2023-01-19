'use client'
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@mui/material'

const GoogleButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: '#4285F4 !important',
        color: 'white',
        '&:hover': {
          backgroundColor: '#4285F4',
        },
      }}
    >
      {children}
    </Button>
  )
}

export default function Login() {
  const { data: session } = useSession()

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!session && (
        <>
          No ha ingresado a su cuenta <br />
          <GoogleButton onClick={() => signIn('google')}>
            Ingresar con Google
          </GoogleButton>
        </>
      )}
      {session && (
        <>
          <Link href="/" />
        </>
      )}
    </div>
  )
}
