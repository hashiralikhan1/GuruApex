'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { StyledButton } from '@/components/core'
import { JobCard, type Job } from '@/app/_components/career'

const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Operations']

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    salary: '$120k - $160k',
    description:
      'We are looking for an experienced Frontend Developer to join our engineering team and help build exceptional user experiences.',
    requirements: [
      '5+ years of experience with React/Next.js',
      'Strong TypeScript skills',
      'Experience with modern CSS and design systems',
      'Excellent communication skills',
    ],
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$100k - $140k',
    description:
      'Join our design team to create beautiful, intuitive interfaces for our clients across various industries.',
    requirements: [
      '4+ years of product design experience',
      'Proficiency in Figma and design tools',
      'Strong portfolio showcasing web and mobile design',
      'Experience with design systems',
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Hybrid / San Francisco',
    type: 'Full-time',
    salary: '$90k - $120k',
    description:
      'Lead our digital marketing efforts and help our clients achieve their growth objectives through data-driven strategies.',
    requirements: [
      '5+ years in digital marketing',
      'Experience with SEO, PPC, and social media',
      'Strong analytical skills',
      'Proven track record of successful campaigns',
    ],
  },
  {
    id: 4,
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130k - $170k',
    description:
      'Build scalable backend systems and APIs that power our clients digital products and services.',
    requirements: [
      '5+ years with Node.js or Python',
      'Experience with cloud services (AWS/GCP)',
      'Database design and optimization',
      'API design best practices',
    ],
  },
  {
    id: 5,
    title: 'Project Manager',
    department: 'Operations',
    location: 'Hybrid / San Francisco',
    type: 'Full-time',
    salary: '$85k - $115k',
    description:
      'Coordinate cross-functional teams to deliver exceptional digital projects on time and within budget.',
    requirements: [
      '4+ years of project management experience',
      'Agile/Scrum certification preferred',
      'Experience with digital/software projects',
      'Strong client communication skills',
    ],
  },
  {
    id: 6,
    title: 'UX Researcher',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $110k',
    description:
      'Conduct user research to inform design decisions and help create user-centered digital experiences.',
    requirements: [
      '3+ years of UX research experience',
      'Experience with various research methodologies',
      'Strong presentation and synthesis skills',
      'Portfolio of research case studies',
    ],
  },
]

const benefits = [
  {
    icon: '🏠',
    title: 'Remote-First Culture',
    description:
      'Work from anywhere with flexible hours that fit your lifestyle.',
  },
  {
    icon: '🏥',
    title: 'Health & Wellness',
    description:
      'Comprehensive health, dental, and vision insurance for you and your family.',
  },
  {
    icon: '📚',
    title: 'Learning Budget',
    description:
      '$2,000 annual budget for courses, conferences, and professional development.',
  },
  {
    icon: '🏖️',
    title: 'Unlimited PTO',
    description:
      'Take the time you need to recharge and maintain work-life balance.',
  },
  {
    icon: '💰',
    title: 'Competitive Equity',
    description:
      'All employees receive equity options to share in our success.',
  },
  {
    icon: '🎉',
    title: 'Team Events',
    description:
      'Regular virtual and in-person events to connect with teammates.',
  },
]

const CareerPage = () => {
  const theme = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredJobs =
    activeCategory === 'All'
      ? jobs
      : jobs.filter((j) => j.department === activeCategory)

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
                Join Our Team
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
              Build the Future
              <br />
              With Us
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Join a team of passionate creators, thinkers, and problem-solvers
              dedicated to delivering exceptional digital experiences.
            </Typography>
          </Box>
        </Container>
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '2%',
            width: { xs: 100, md: 150 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/drawing-tablet.png'
            alt='Drawing tablet decoration'
            width={400}
            height={400}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '3%',
            width: { xs: 80, md: 120 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/pen.png'
            alt='Pen decoration'
            width={200}
            height={300}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Culture Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: 'background.paper',
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
              Why Work at GuruApex?
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: 15, md: 17 },
              }}
            >
              We believe in creating an environment where talented people can do
              their best work.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {benefits.map((benefit, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: 'background.default',
                    height: '100%',
                    transition: (t) => t.transitions.create(['transform']),
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 40, mb: 2 }}>
                    {benefit.icon}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: 16, md: 18 },
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Job Listings */}
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
              Open Positions
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                maxWidth: 500,
                mx: 'auto',
                fontSize: { xs: 15, md: 17 },
              }}
            >
              Find your next opportunity and help us shape the future of digital
              experiences.
            </Typography>
          </Box>

          {/* Filter */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: 'center',
              mb: 5,
            }}
          >
            {departments.map((dept) => (
              <Box
                key={dept}
                onClick={() => setActiveCategory(dept)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: (t) =>
                    t.transitions.create(['background-color', 'color']),
                  backgroundColor:
                    activeCategory === dept
                      ? 'primary.main'
                      : theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.08)'
                      : 'rgba(0,0,0,0.06)',
                  color:
                    activeCategory === dept
                      ? 'primary.contrastText'
                      : 'text.primary',
                  '&:hover': {
                    backgroundColor:
                      activeCategory === dept
                        ? 'primary.main'
                        : theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.12)'
                        : 'rgba(0,0,0,0.1)',
                  },
                }}
              >
                {dept}
              </Box>
            ))}
          </Box>

          {/* Jobs List */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </Box>

          {filteredJobs.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant='h5' sx={{ color: 'text.secondary' }}>
                No open positions in this department at the moment.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            variant='h3'
            sx={{
              mb: 2,
              fontSize: { xs: 22, md: 28 },
              fontWeight: 800,
            }}
          >
            Don&apos;t See a Perfect Fit?
          </Typography>
          <Typography
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontSize: { xs: 15, md: 17 },
            }}
          >
            We&apos;re always looking for exceptional talent. Send us your
            resume and we&apos;ll keep you in mind for future opportunities.
          </Typography>
          <Link href='/contact' passHref>
            <StyledButton variant='outlined' size='large' color='primary'>
              Send Your Resume
            </StyledButton>
          </Link>
        </Container>
      </Box>
    </Box>
  )
}

export default CareerPage
