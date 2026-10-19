'use client'

import React from 'react'

// hooks
import { useTheme } from '@mui/material'

// components
import Box from '@mui/material/Box'
import HomeHeroContent from './home-hero/home-hero-content'
import HomeHeroDecoration from './home-hero/home-hero-decoration'

const HomeHero = () => {
  const { palette } = useTheme()

  return (
    <Box
      id='home-hero'
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: palette.mode === 'dark' ? '#1b2b3c' : '#e8f3ff',
        minHeight: '100vh',
        overflow: 'hidden',
        isolation: 'isolate',
        '& .hero-decoration': { pointerEvents: 'none' },
        '@media (max-width: 600px)': {
          '& .hero-decoration-0': { top: 8, right: -105, opacity: 0.55 },
          '& .hero-decoration-0 > div > div': { width: '190px !important' },
          '& .hero-decoration-1': { top: 28, left: -58, opacity: 0.5 },
          '& .hero-decoration-1 > div > div': { width: '150px !important' },
          '& .hero-decoration-2, & .hero-decoration-3, & .hero-decoration-4, & .hero-decoration-5, & .hero-decoration-6, & .hero-decoration-7': { display: 'none' },
          '& .hero-decoration-8': { right: -130, bottom: -70, opacity: 0.35 },
          '& .hero-decoration-8 > div > div': { width: '260px !important' },
        },
      }}
    >
      <HomeHeroDecoration />
      <HomeHeroContent />
    </Box>
  )
}

export default HomeHero
