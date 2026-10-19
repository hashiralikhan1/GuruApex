'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Collapse from '@mui/material/Collapse'
import { StyledButton } from '@/components/core'
import SendIcon from '@/assets/icons/picon--send.svg'

export interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
}

interface JobCardProps {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        backgroundColor: 'background.paper',
        border: (t) => `1px solid ${t.palette.divider}`,
        transition: (t) => t.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: 2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 2,
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant='h5'
            sx={{ fontWeight: 700, mb: 1, fontSize: { xs: 18, md: 22 } }}
          >
            {job.title}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip
              label={job.department}
              size='small'
              color='primary'
              sx={{ fontSize: 12 }}
            />
            <Chip
              label={job.location}
              size='small'
              variant='outlined'
              sx={{ fontSize: 12 }}
            />
            <Chip
              label={job.type}
              size='small'
              variant='outlined'
              sx={{ fontSize: 12 }}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              fontSize: { xs: 16, md: 18 },
            }}
          >
            {job.salary}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
            per year
          </Typography>
        </Box>
      </Box>

      <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: 15 }}>
        {job.description}
      </Typography>

      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          color: 'primary.main',
          fontWeight: 500,
          fontSize: 14,
          mb: expanded ? 2 : 0,
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {expanded ? 'Hide Requirements' : 'View Requirements'}
        <Box
          component='span'
          sx={{
            ml: 0.5,
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            textDecoration: 'none',
          }}
        >
          ▼
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 15 }}>
            Requirements:
          </Typography>
          <Box component='ul' sx={{ pl: 2, m: 0 }}>
            {job.requirements.map((req, idx) => (
              <Box
                component='li'
                key={idx}
                sx={{ color: 'text.secondary', fontSize: 14, mb: 0.5 }}
              >
                {req}
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Link href='/contact' passHref>
              <StyledButton
                variant='contained'
                size='medium'
                color='primary'
                endIcon={
                  <Box component={SendIcon} sx={{ width: 16, height: 16 }} />
                }
              >
                Apply Now
              </StyledButton>
            </Link>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}

export default JobCard
