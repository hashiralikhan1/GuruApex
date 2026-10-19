'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

interface TeamMemberCardProps {
  member: TeamMember
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        transition: (t) => t.transitions.create(['transform']),
        '&:hover': {
          transform: 'translateY(-8px)',
          '& .member-image': {
            boxShadow: 6,
          },
        },
      }}
    >
      <Box
        className='member-image'
        sx={{
          position: 'relative',
          width: { xs: 180, md: 200 },
          height: { xs: 180, md: 200 },
          borderRadius: '50%',
          overflow: 'hidden',
          mx: 'auto',
          mb: 3,
          transition: (t) => t.transitions.create(['box-shadow']),
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Typography
        variant='h6'
        sx={{
          fontWeight: 700,
          mb: 0.5,
          fontSize: { xs: 16, md: 18 },
        }}
      >
        {member.name}
      </Typography>
      <Typography
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          fontSize: 14,
          mb: 1,
        }}
      >
        {member.role}
      </Typography>
      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: 13,
          px: 2,
        }}
      >
        {member.bio}
      </Typography>
    </Box>
  )
}

export default TeamMemberCard
