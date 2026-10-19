'use client'

import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Skeleton from '@mui/material/Skeleton'

const AppBarSkeleton: FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        boxSizing: 'border-box',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        width: {
          xs: '100%',
          md: 1200,
        },
        zIndex: 1100,
        textAlign: 'center',
      }}
    >
      <Container
        sx={{
          px: {
            xs: '16px !important',
            md: '0 !important',
          },
          pt: {
            xs: 1,
            md: 0,
          },
        }}
      >
        <Box
          sx={{
            mt: {
              xs: 1,
              md: 2.4,
            },
            display: 'flex',
            alignItems: 'center',
            padding: 0,
          }}
        >
          {/* Logo skeleton */}
          <Skeleton
            variant='rounded'
            width={120}
            height={40}
            sx={{
              borderRadius: 2,
              bgcolor: 'action.hover',
            }}
          />

          {/* Navigation skeleton - hidden on mobile */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 'auto',
              gap: 3,
              alignItems: 'center',
            }}
          >
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                variant='text'
                width={70}
                height={24}
                sx={{ bgcolor: 'action.hover' }}
              />
            ))}
            {/* Dark mode toggle skeleton */}
            <Skeleton
              variant='circular'
              width={40}
              height={40}
              sx={{ bgcolor: 'action.hover' }}
            />
          </Box>

          {/* Mobile hamburger skeleton */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              ml: 'auto',
              alignItems: 'center',
            }}
          >
            <Skeleton
              variant='rounded'
              width={32}
              height={32}
              sx={{
                borderRadius: 1,
                bgcolor: 'action.hover',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AppBarSkeleton
