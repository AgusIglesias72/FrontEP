'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function BasicCard({
  extra,
  name,
  id,
  buyQuantity,
  province,
  email,
  lastBuy,
  instagram,
  website,
}) {
  return (
    <Card sx={{ width: 350, padding: '1rem' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {email}
        </Typography>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          CUIT : {id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {province}
        </Typography>
        <hr />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            gap: '2rem',
            marginTop: '1rem',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              alignItems: 'center',
              height: '100%',
              margin: 'auto',
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 1, textAlign: 'center' }}
            >
              Compras
            </Typography>
            <Typography
              sx={{ mb: 2, textAlign: 'center' }}
              color="text.secondary"
              variant="h3"
            >
              {buyQuantity}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 1, textAlign: 'center' }}
            >
              Última Compra
            </Typography>
            <Typography
              sx={{ mb: 0.5, textAlign: 'center' }}
              color="text.secondary"
              variant="h3"
            >
              {lastBuy}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              alignItems: 'center',
              height: '100%',
              margin: 'auto',
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 1, textAlign: 'center' }}
            >
              Instagram
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <Link href={`https://www.instagram.com/${instagram}`}>
                {instagram}
              </Link>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 1, textAlign: 'center' }}
            >
              Web
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <Link href={`https://www.instagram.com/${website}`}>
                {website}
              </Link>
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Button
        sx={{
          width: '100%',
          marginTop: '1rem',
          backgroundColor: '#3f51b5 !important',
          color: '#fff !important',
        }}
      >
        <Link href={`/revendedores?email=${email}`}>Ver mas</Link>
      </Button>
    </Card>
  )
}
