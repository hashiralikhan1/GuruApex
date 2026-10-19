import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  useTheme,
} from '@mui/material'
import { companyMenus } from '@/constants/menus'
import AppBarSwitchDarkMode from './switch-dark-mode'
import Logo from '@/assets/logo.svg'

const AnimatedHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Fragment>
      <IconButton
        onClick={toggleMenu}
        sx={{
          p: 0,
          width: 42,
          height: 42,
        }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg width='32' height='32' viewBox='0 0 32 32'>
          {/* Top line */}
          <motion.line
            x1='6'
            y1='10'
            x2='26'
            y2='10'
            stroke={theme.palette.primary.main}
            strokeWidth='2'
            strokeLinecap='round'
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />

          {/* Middle line */}
          <motion.line
            x1='6'
            y1='16'
            x2='26'
            y2='16'
            stroke={theme.palette.primary.main}
            strokeWidth='2'
            strokeLinecap='round'
            animate={{
              opacity: isOpen ? 0 : 1,
              x: isOpen ? 10 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          />

          {/* Bottom line */}
          <motion.line
            x1='6'
            y1='22'
            x2='26'
            y2='22'
            stroke={theme.palette.primary.main}
            strokeWidth='2'
            strokeLinecap='round'
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </IconButton>

      <Drawer
        anchor='right'
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: 320,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
            }}
          >
            <Box
              component={Logo}
              sx={{
                width: 'auto',
                height: 32,
              }}
            />
            <AppBarSwitchDarkMode />
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Navigation Links */}
          <List disablePadding>
            <AnimatePresence>
              {companyMenus.map((menu, index) => {
                const isActive = pathname === menu.path

                return (
                  <motion.div
                    key={menu.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ListItem disablePadding sx={{ mb: 0.5 }}>
                      <Link
                        href={menu.path}
                        passHref
                        style={{ width: '100%', textDecoration: 'none' }}
                        onClick={handleClose}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: 2,
                            backgroundColor: isActive
                              ? 'primary.light'
                              : 'transparent',
                            '&:hover': {
                              backgroundColor: isActive
                                ? 'primary.light'
                                : 'action.hover',
                            },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 40,
                              color: isActive
                                ? 'primary.main'
                                : 'text.secondary',
                            }}
                          >
                            {menu.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={menu.label}
                            primaryTypographyProps={{
                              fontWeight: isActive ? 600 : 500,
                              color: isActive ? 'primary.main' : 'text.primary',
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </List>

          <Divider sx={{ my: 3 }} />

          {/* Footer */}
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ textAlign: 'center' }}
          >
            © {new Date().getFullYear()} GuruApex
          </Typography>
        </Box>
      </Drawer>
    </Fragment>
  )
}

export default AnimatedHamburgerMenu
