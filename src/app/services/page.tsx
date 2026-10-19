'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { StyledButton } from '@/components/core'
import { services } from '@/constants/service'
import { ServiceCard, type ExtendedService } from '@/app/_components/services'
import SendIcon from '@/assets/icons/picon--send.svg'

const defaultFeatures = [
  'Custom Solutions',
  'Expert Team',
  '24/7 Support',
  'Fast Delivery',
]

const additionalServices: ExtendedService[] = [
  {
    id: 7,
    title: 'Cloud Solutions',
    slug: 'cloud',
    description:
      'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
    image: '/icons/mobile-app.png',
    features: ['AWS & Azure', 'Cloud Migration', 'DevOps', 'Monitoring'],
  },
  {
    id: 8,
    title: 'Mobile App Development',
    slug: 'mobile',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    image: '/icons/mobile-app.png',
    features: [
      'iOS & Android',
      'React Native',
      'Flutter',
      'App Store Optimization',
    ],
  },
  {
    id: 9,
    title: 'SEO & Analytics',
    slug: 'seo-services',
    description:
      'Data-driven SEO strategies and analytics to improve your online visibility and drive organic growth.',
    image: '/icons/content-strategy.png',
    features: [
      'Technical SEO',
      'Content Strategy',
      'Analytics Setup',
      'Reporting',
    ],
  },
]

const extendedServices: ExtendedService[] = [
  ...services.map(
    (s): ExtendedService => ({ ...s, features: defaultFeatures })
  ),
  ...additionalServices,
]

const ServicesPage = () => {
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
                What We Offer
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
              Comprehensive Digital
              <br />
              Solutions for Your Business
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              From strategy to execution, we provide end-to-end services to help
              your business thrive in the digital landscape.
            </Typography>
          </Box>
        </Container>
        {/* Decorative shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '2%',
            width: { xs: 100, md: 160 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/edding.png'
            alt='Marker decoration'
            width={217}
            height={320}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            right: '3%',
            width: { xs: 100, md: 150 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/marker.png'
            alt='Marker decoration'
            width={200}
            height={300}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Services List */}
      {extendedServices.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor:
            theme.palette.mode === 'dark' ? '#1a1a2e' : '#f8fafc',
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
            Ready to Get Started?
          </Typography>
          <Typography
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontSize: { xs: 15, md: 17 },
            }}
          >
            Let&apos;s discuss how we can help transform your business with our
            comprehensive digital solutions.
          </Typography>
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
        </Container>
      </Box>
    </Box>
  )
}

export default ServicesPage
