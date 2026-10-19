'use client'

import React, { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { StyledButton } from '@/components/core'

export interface ExtendedService {
  id: number
  title: string
  slug: string
  description: string
  icon?: ReactElement
  image?: string
  features: string[]
}

interface ServiceCardProps {
  service: ExtendedService
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const theme = useTheme()
  const isEven = index % 2 === 0

  return (
    <Box
      id={service.slug}
      sx={{
        scrollMarginTop: '100px',
        py: { xs: 6, md: 10 },
        backgroundColor: isEven ? 'background.default' : 'background.paper',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          direction={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }}
          alignItems='center'
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#1e1e2f' : '#f5f7fa',
                p: { xs: 4, md: 6 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 200, md: 300 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                  zIndex: 0,
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Image
                  src={service.image as string}
                  alt={service.title}
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                mb: 2,
                borderRadius: 1,
                display: 'inline-block',
                padding: '4px 12px',
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Service {String(index + 1).padStart(2, '0')}
              </Typography>
            </Box>
            <Typography
              variant='h3'
              sx={{
                mb: 2,
                fontSize: { xs: 24, md: 32 },
                fontWeight: 800,
              }}
            >
              {service.title}
            </Typography>
            <Typography
              sx={{
                mb: 3,
                color: 'text.secondary',
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.8,
              }}
            >
              {service.description}
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {service.features.map((feature: string, idx: number) => (
                <Grid size={{ xs: 6 }} key={idx}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                      }}
                    />
                    <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                      {feature}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Link href='/contact' passHref>
              <StyledButton variant='outlined' color='primary' size='medium'>
                Learn More
              </StyledButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ServiceCard
