'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { ContactForm, ContactInfoCard } from '@/app/_components/contact'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import LocationIcon from '@/assets/icons/tdesign--location.svg'

const contactInfo = [
  {
    icon: EmailIcon,
    title: 'Email Us',
    value: 'hello@velox.agency',
    subtitle: 'We reply within 24 hours',
    href: 'mailto:hello@velox.agency',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    subtitle: 'Mon - Fri, 9am - 6pm EST',
    href: 'tel:+15551234567',
  },
  {
    icon: LocationIcon,
    title: 'Visit Us',
    value: '123 Innovation Drive',
    subtitle: 'San Francisco, CA 94105',
    href: '#',
  },
]

const ContactPage = () => {
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
                Get In Touch
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
              Let&apos;s Start a
              <br />
              Conversation
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </Typography>
          </Box>
        </Container>
        {/* Decorative shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '2%',
            width: { xs: 80, md: 130 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Image
            src='/images/hero/papers.png'
            alt='Papers decoration'
            width={900}
            height={1000}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '3%',
            width: { xs: 60, md: 100 },
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

      {/* Contact Info Cards */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: 'background.paper',
          mt: { xs: -4, md: -6 },
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            {contactInfo.map((info, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <ContactInfoCard info={info} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ContactForm />
            </Grid>

            {/* Map Placeholder & Additional Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              {/* Map Placeholder */}
              <Box
                sx={{
                  height: { xs: 250, md: 300 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 4,
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#1e1e2f' : '#e8ecf0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  <Box
                    component={LocationIcon}
                    sx={{ width: 48, height: 48, mb: 2, opacity: 0.5 }}
                  />
                  <Typography variant='h6' sx={{ fontWeight: 600 }}>
                    San Francisco, CA
                  </Typography>
                  <Typography variant='body2'>
                    Interactive map coming soon
                  </Typography>
                </Box>
                {/* Decorative grid pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage:
                      'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
              </Box>

              {/* FAQ */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography
                  variant='h5'
                  sx={{ mb: 3, fontWeight: 700, fontSize: { xs: 18, md: 22 } }}
                >
                  Frequently Asked
                </Typography>
                {[
                  {
                    q: 'How long does a typical project take?',
                    a: 'Project timelines vary based on scope. Most projects range from 4-12 weeks.',
                  },
                  {
                    q: 'What is your pricing model?',
                    a: 'We offer both fixed-price and hourly engagement models depending on project needs.',
                  },
                  {
                    q: 'Do you offer ongoing support?',
                    a: 'Yes! We provide maintenance and support packages for all completed projects.',
                  },
                ].map((faq, idx) => (
                  <Box key={idx} sx={{ mb: idx < 2 ? 3 : 0 }}>
                    <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: 15 }}>
                      {faq.q}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                      {faq.a}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactPage
