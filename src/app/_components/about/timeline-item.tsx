'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface Milestone {
  year: string
  title: string
  description: string
}

interface TimelineItemProps {
  milestone: Milestone
  index: number
}

const TimelineItem = ({ milestone, index }: TimelineItemProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        mb: 4,
        pl: { xs: 8, md: 0 },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: index % 2 === 0 ? 'row' : 'row-reverse',
        },
        alignItems: { xs: 'flex-start', md: 'center' },
      }}
    >
      {/* Dot */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 12, md: '50%' },
          top: { xs: 8, md: '50%' },
          width: 18,
          height: 18,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          border: (t) => `3px solid ${t.palette.background.paper}`,
          transform: { xs: 'none', md: 'translate(-50%, -50%)' },
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          width: { xs: '100%', md: 'calc(50% - 40px)' },
          p: 3,
          borderRadius: 3,
          backgroundColor: 'background.default',
          ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
          mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
          textAlign: {
            xs: 'left',
            md: index % 2 === 0 ? 'right' : 'left',
          },
        }}
      >
        <Typography
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            fontSize: 14,
            mb: 0.5,
          }}
        >
          {milestone.year}
        </Typography>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 700,
            mb: 0.5,
            fontSize: { xs: 16, md: 18 },
          }}
        >
          {milestone.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
          {milestone.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default TimelineItem
