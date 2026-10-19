'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

export interface Project {
  id: number
  title: string
  category: string
  client: string
  description: string
  image: string
  tags: string[]
  year: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: 'background.paper',
        transition: (t) => t.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 200, md: 240 },
          overflow: 'hidden',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${
              theme.palette.mode === 'dark'
                ? 'rgba(0,0,0,0.8)'
                : 'rgba(0,0,0,0.6)'
            } 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* Category Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {project.category}
        </Box>
        {/* Year Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(4px)',
            color: '#fff',
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {project.year}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3 }}>
        <Typography
          variant='subtitle2'
          sx={{ color: 'primary.main', mb: 0.5, fontSize: 13 }}
        >
          {project.client}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            mb: 1.5,
            fontWeight: 700,
            fontSize: { xs: 18, md: 20 },
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            fontSize: 14,
            mb: 2,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.tags.map((tag, idx) => (
            <Chip
              key={idx}
              label={tag}
              size='small'
              sx={{
                fontSize: 11,
                height: 24,
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(0,0,0,0.06)',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard
