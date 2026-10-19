'use client'

import React, { memo, useEffect, useState } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'react-scroll'

// assets
import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import LogoIcon from '@/assets/logo-icon.svg'

// motion
import { motion, AnimatePresence } from 'framer-motion'

// configs
// import { AppConfig } from '@/configs'

const MotionTypography = motion(Typography)

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const SERVICES_TEXTS = [
    'Digital Marketing',
    'UI/UX Design',
    'Web & Mobile App Development',
    'Cloud Solutions',
    'Data & Analytics',
    'AI & Machine Learning',
    'E-Commerce Solutions',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Stack
        direction='column'
        sx={{
          position: 'relative',
          minHeight: { xs: '720px', sm: '100vh' },
          px: { xs: 2, sm: 3, md: 0 },
          py: { xs: 10, md: 0 },
          boxSizing: 'border-box',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <Stack
          direction='row'
          sx={(theme) => ({
            mb: 2,
            transition: theme.transitions.create(['all'], {
              duration: theme.transitions.duration.complex,
            }),
            div: {
              transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.complex,
              }),
            },
          })}
        >
          <Box
            sx={() => ({
              width: 24,
              height: 'auto',
              mr: 1.5,
              mt: '2px',
            })}
          >
            <Box component={LogoIcon} />
          </Box>
          <Box>
            <AnimatePresence mode='wait'>
              <MotionTypography
                key={currentIndex}
                variants={{
                  initial: { y: 20 },
                  animate: { y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                }}
                sx={(theme) => ({
                  fontSize: {
                    xs: 17,
                    md: 18,
                  },
                  fontWeight: '600',
                  color: theme.palette.primary.main,
                })}
              >
                {SERVICES_TEXTS[currentIndex]}
              </MotionTypography>
            </AnimatePresence>
          </Box>
        </Stack>
        <Box sx={{ textAlign: 'center' }}>
          <motion.div initial={{ x: -52 }} animate={{ x: 0 }} transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}>
          <Typography
            component='h2'
            sx={{
              mb: 4,
              maxWidth: { xs: 560, md: 900 },
              mx: 'auto',
              fontSize: { xs: 30, sm: 36, md: 40, lg: 52 },
              lineHeight: { xs: 1.2, md: 1.5 },
              fontWeight: '800',
              overflowWrap: 'anywhere',
            }}
          >
            We are Global Digital Brand
            <Box component='span' sx={{ display: { xs: 'none', sm: 'inline' } }}><br /></Box>
            <Box component='span' sx={{ display: { xs: 'block', sm: 'inline' } }}>Tech Agency</Box>
          </Typography>
          </motion.div>
          <motion.div initial={{ x: 52 }} animate={{ x: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.24 }}>
          <Typography
            sx={{
              mb: 4,
              mx: 'auto',
              maxWidth: 680,
              px: { xs: 0, sm: 1 },
              color: 'text.secondary',
              fontWeight: 500,
              lineHeight: 2,
              fontSize: {
                xs: 14,
                md: 17,
              },
            }}
          >
            A Digital Modern Agency specializing in <strong>Design </strong>,
            <strong>Development </strong>, <strong>Branding </strong>,
            <Box component='span' sx={{ display: { xs: 'none', sm: 'inline' } }}><br /></Box>
            and <strong>Online Marketing </strong> to elevate your business.
          </Typography>
          </motion.div>
        </Box>
        <motion.div
          initial={{ y: 32 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.35 }}
        >
          <Box
            sx={() => ({
              mt: { xs: 5, md: '90px' },
              mb: { xs: 0, md: '-90px' },
              textAlign: 'center',
            })}
          >
            <Link
              to='home-about'
              offset={0}
              spy={true}
              smooth={true}
              duration={400}
              style={{ display: 'block' }}
            >
              <Box
                component={MouseIcon}
                height={50}
                width={50}
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              />
              <Typography
                sx={{
                  color: 'text.disabled',
                  fontWeight: '500',
                  fontSize: 12,
                  mt: 1.2,
                }}
              >
                Scroll for more
              </Typography>
            </Link>
          </Box>
        </motion.div>
      </Stack>
    </motion.div>
  )
}

export default memo(HomeHeroContent)
