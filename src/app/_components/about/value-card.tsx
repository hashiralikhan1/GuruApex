'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface Value {
  icon: string
  title: string
  description: string
}

interface ValueCardProps {
  value: Value
}

const ValueCard = ({ value }: ValueCardProps) => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        backgroundColor: 'background.paper',
        height: '100%',
        transition: (t) => t.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3,
        },
      }}
    >
      <Typography sx={{ fontSize: 40, mb: 2 }}>{value.icon}</Typography>
      <Typography
        variant='h6'
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: { xs: 16, md: 18 },
        }}
      >
        {value.title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
        {value.description}
      </Typography>
    </Box>
  )
}

export default ValueCard
