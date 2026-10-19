'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { StyledButton } from '@/components/core'
import {
  TeamMemberCard,
  ValueCard,
  TimelineItem,
  type TeamMember,
  type Value,
  type Milestone,
} from '@/app/_components/about'
import SendIcon from '@/assets/icons/picon--send.svg'

const values: Value[] = [
  {
    icon: '🎯',
    title: 'Excellence',
    description:
      'We pursue excellence in everything we do, from code quality to client communication.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description:
      'We believe the best work comes from diverse perspectives working together.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description:
      'We embrace new technologies and approaches to solve complex challenges.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description:
      'We invest in continuous learning and development for our team and clients.',
  },
  {
    icon: '⚡',
    title: 'Agility',
    description:
      'We adapt quickly to change and deliver results in fast-paced environments.',
  },
  {
    icon: '💎',
    title: 'Integrity',
    description:
      'We build trust through transparency, honesty, and ethical business practices.',
  },
]

const team: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'Former Google engineer with 15+ years in tech leadership.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Creative Director',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Award-winning designer with a passion for user-centered design.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Engineering',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack expert specializing in scalable cloud architectures.',
  },
  {
    name: 'David Kim',
    role: 'Head of Strategy',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Digital strategist helping brands achieve measurable growth.',
  },
]

const milestones: Milestone[] = [
  {
    year: '2018',
    title: 'Founded',
    description: 'Started with a team of 3 in San Francisco',
  },
  {
    year: '2019',
    title: 'First Major Client',
    description: 'Partnered with Fortune 500 company',
  },
  {
    year: '2020',
    title: 'Remote-First',
    description: 'Embraced fully distributed team model',
  },
  {
    year: '2021',
    title: '50+ Projects',
    description: 'Crossed milestone of 50 completed projects',
  },
  {
    year: '2022',
    title: 'Global Team',
    description: 'Expanded to team members across 12 countries',
  },
  {
    year: '2024',
    title: 'Industry Award',
    description: 'Recognized as Top Digital Agency',
  },
]

const AboutPage = () => {
  const theme = useTheme()

  return (
    <Box component='main'>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          backgroundColor:
            theme.palette.mode === 'dark' ? '#151733' : '#e8f3ff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                mb: 3,
                borderRadius: 1,
                display: 'inline-block',
                padding: '6px 14px',
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgb(255,255,255,0.10)'
                    : 'primary.light',
                color:
                  theme.palette.mode === 'dark' ? '#fbfbfb' : 'primary.main',
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
                variant='h5'
              >
                Our Story
              </Typography>
            </Box>
            <Typography
              variant='h1'
              sx={{
                mb: 3,
                fontSize: { xs: 32, md: 48 },
                fontWeight: 800,
                lineHeight: 1.2,
                color:
                  theme.palette.mode === 'dark'
                    ? 'primary.contrastText'
                    : 'text.primary',
              }}
            >
              Crafting Digital
              <br />
              Excellence Since 2018
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              We&apos;re a team of strategists, designers, and developers
              dedicated to helping businesses thrive in the digital age.
            </Typography>
          </Box>
        </Container>
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-5%',
            right: '3%',
            width: { xs: 120, md: 200 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/camera.png'
            alt='Camera decoration'
            width={458}
            height={309}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '2%',
            width: { xs: 100, md: 160 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/flowerpot.png'
            alt='Flowerpot decoration'
            width={550}
            height={471}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Mission Section */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems='center'>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={(t) => ({
                  mb: 2,
                  borderRadius: 1,
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: t.palette.primary.light,
                  color: t.palette.primary.main,
                })}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Our Mission
                </Typography>
              </Box>
              <Typography
                variant='h2'
                sx={{
                  mb: 3,
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 800,
                  lineHeight: 1.2,
                }}
              >
                Empowering Businesses Through Digital Innovation
              </Typography>
              <Typography
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.8,
                }}
              >
                At GuruApex, we believe that exceptional digital experiences have
                the power to transform businesses. Our mission is to partner
                with forward-thinking organizations to create innovative
                solutions that drive growth, engagement, and lasting impact.
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.8,
                }}
              >
                We combine strategic thinking with creative excellence and
                technical expertise to deliver results that exceed expectations.
                Every project is an opportunity to push boundaries and create
                something remarkable.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: { xs: 300, md: 450 },
                }}
              >
                <Image
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
                  alt='Our team at work'
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {/* Overlay gradient */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}30, transparent)`,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                fontSize: { xs: 24, md: 36 },
                fontWeight: 800,
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: 15, md: 17 },
              }}
            >
              The principles that guide everything we do and define who we are
              as a team.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {values.map((value, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <ValueCard value={value} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth='md'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                fontSize: { xs: 24, md: 36 },
                fontWeight: 800,
              }}
            >
              Our Journey
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: 15, md: 17 },
              }}
            >
              Key milestones in our story of growth and innovation.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: 'divider',
                transform: { xs: 'none', md: 'translateX(-50%)' },
              }}
            />

            {milestones.map((milestone, idx) => (
              <TimelineItem key={idx} milestone={milestone} index={idx} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                fontSize: { xs: 24, md: 36 },
                fontWeight: 800,
              }}
            >
              Meet Our Leadership
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: 500,
                mx: 'auto',
                fontSize: { xs: 15, md: 17 },
              }}
            >
              The talented individuals driving our vision and leading our team
              to success.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {team.map((member, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <TeamMemberCard member={member} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor:
            theme.palette.mode === 'dark' ? '#1a1a2e' : '#f0f4f8',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            {[
              { value: '6+', label: 'Years of Experience' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '40+', label: 'Team Members' },
              { value: '12', label: 'Countries' },
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 36, md: 52 },
                      fontWeight: 800,
                      color: 'primary.main',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      color: 'text.secondary',
                      fontSize: { xs: 14, md: 16 },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            variant='h2'
            sx={{
              mb: 2,
              fontSize: { xs: 24, md: 36 },
              fontWeight: 800,
            }}
          >
            Ready to Work Together?
          </Typography>
          <Typography
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontSize: { xs: 15, md: 17 },
            }}
          >
            Let&apos;s discuss how we can help bring your vision to life with
            our expertise and passion for digital excellence.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href='/contact' passHref>
              <StyledButton
                variant='contained'
                size='large'
                color='primary'
                endIcon={
                  <Box component={SendIcon} sx={{ width: 18, height: 18 }} />
                }
              >
                Start a Project
              </StyledButton>
            </Link>
            <Link href='/career' passHref>
              <StyledButton variant='outlined' size='large' color='primary'>
                Join Our Team
              </StyledButton>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutPage
