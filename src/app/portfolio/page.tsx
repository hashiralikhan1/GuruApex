'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { ProjectCard, type Project } from '@/app/_components/portfolio'

const categories = [
  'All',
  'Web Design',
  'Branding',
  'Mobile App',
  'E-commerce',
  'Marketing',
]

const projects: Project[] = [
  {
    id: 1,
    title: 'Fintech Dashboard Redesign',
    category: 'Web Design',
    client: 'PayFlow Inc.',
    description:
      'Complete redesign of a fintech dashboard improving user engagement by 45%.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['UI/UX', 'React', 'Dashboard'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Organic Food Brand Identity',
    category: 'Branding',
    client: 'GreenLeaf Co.',
    description:
      'Full brand identity including logo, packaging, and brand guidelines.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
    tags: ['Branding', 'Logo', 'Packaging'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    client: 'FitLife',
    description:
      'iOS and Android app with workout tracking, nutrition, and social features.',
    image:
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    tags: ['React Native', 'iOS', 'Android'],
    year: '2023',
  },
  {
    id: 4,
    title: 'Luxury Fashion E-commerce',
    category: 'E-commerce',
    client: 'Elegance Mode',
    description: 'High-end fashion e-commerce platform with AR try-on feature.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Shopify', 'AR', 'Fashion'],
    year: '2023',
  },
  {
    id: 5,
    title: 'SaaS Marketing Campaign',
    category: 'Marketing',
    client: 'CloudSync Pro',
    description:
      'Multi-channel marketing campaign resulting in 200% lead increase.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['SEO', 'PPC', 'Content'],
    year: '2024',
  },
  {
    id: 6,
    title: 'Healthcare Portal',
    category: 'Web Design',
    client: 'MediCare Plus',
    description:
      'Patient portal with appointment booking, records, and telemedicine.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['Healthcare', 'Portal', 'Next.js'],
    year: '2024',
  },
  {
    id: 7,
    title: 'Crypto Exchange Platform',
    category: 'Web Design',
    client: 'CryptoVault',
    description: 'Secure cryptocurrency trading platform with real-time data.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    tags: ['Fintech', 'Trading', 'Security'],
    year: '2023',
  },
  {
    id: 8,
    title: 'Restaurant Chain Branding',
    category: 'Branding',
    client: 'Taste Haven',
    description: 'Complete rebrand for a restaurant chain with 50+ locations.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['Restaurant', 'Logo', 'Menu Design'],
    year: '2024',
  },
]

const PortfolioPage = () => {
  const theme = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
                Our Work
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
              Featured Projects &
              <br />
              Case Studies
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Explore our portfolio of successful projects that have helped
              businesses achieve their digital goals.
            </Typography>
          </Box>
        </Container>
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            right: '2%',
            width: { xs: 120, md: 180 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/mac.png'
            alt='Mac decoration'
            width={500}
            height={400}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '8%',
            left: '3%',
            width: { xs: 80, md: 120 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/smartphone.png'
            alt='Smartphone decoration'
            width={300}
            height={400}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Filter Section */}
      <Box
        sx={{
          py: 4,
          backgroundColor: 'background.paper',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: 'center',
            }}
          >
            {categories.map((category) => (
              <Box
                key={category}
                onClick={() => setActiveCategory(category)}
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
                    activeCategory === category
                      ? 'primary.main'
                      : theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.08)'
                      : 'rgba(0,0,0,0.06)',
                  color:
                    activeCategory === category
                      ? 'primary.contrastText'
                      : 'text.primary',
                  '&:hover': {
                    backgroundColor:
                      activeCategory === category
                        ? 'primary.main'
                        : theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.12)'
                        : 'rgba(0,0,0,0.1)',
                  },
                }}
              >
                {category}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.default',
        }}
      >
        <Container>
          <Grid container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>

          {filteredProjects.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant='h5' sx={{ color: 'text.secondary' }}>
                No projects found in this category.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '50+', label: 'Happy Clients' },
              { value: '12+', label: 'Industry Awards' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <Grid size={{ xs: 6, md: 3 }} key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 36, md: 48 },
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
    </Box>
  )
}

export default PortfolioPage
