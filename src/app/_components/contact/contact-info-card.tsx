'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface ContactInfoItem {
  icon: React.ComponentType
  title: string
  value: string
  subtitle: string
  href: string
}

interface ContactInfoCardProps {
  info: ContactInfoItem
}

const ContactInfoCard = ({ info }: ContactInfoCardProps) => {
  return (
    <Box
      component='a'
      href={info.href}
      sx={{
        display: 'block',
        p: 4,
        borderRadius: 4,
        backgroundColor: 'background.default',
        textDecoration: 'none',
        color: 'inherit',
        transition: (t) => t.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            backgroundColor: 'primary.light',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component={info.icon}
            sx={{ width: 24, height: 24, color: 'primary.main' }}
          />
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
          {info.title}
        </Typography>
      </Box>
      <Typography
        variant='h5'
        sx={{
          fontWeight: 700,
          mb: 0.5,
          fontSize: { xs: 18, md: 20 },
        }}
      >
        {info.value}
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
        {info.subtitle}
      </Typography>
    </Box>
  )
}

export default ContactInfoCard
