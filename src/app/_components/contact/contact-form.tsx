'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { StyledButton } from '@/components/core'
import SendIcon from '@/assets/icons/picon--send.svg'

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Branding',
  'E-commerce Solutions',
  'AI & Machine Learning',
  'Other',
]

const budgetRanges = [
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSnackbar({
      open: true,
      message: 'Thank you! Your message has been sent successfully.',
      severity: 'success',
    })
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    })
  }

  return (
    <>
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography
          variant='h3'
          sx={{ mb: 1, fontWeight: 800, fontSize: { xs: 24, md: 32 } }}
        >
          Send Us a Message
        </Typography>
        <Typography sx={{ mb: 4, color: 'text.secondary' }}>
          Fill out the form below and we&apos;ll get back to you shortly.
        </Typography>

        <Box component='form' onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Your Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                variant='outlined'
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label='Email Address'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
                variant='outlined'
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label='Company Name'
                name='company'
                value={formData.company}
                onChange={handleChange}
                variant='outlined'
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                select
                label='Service Interested In'
                name='service'
                value={formData.service}
                onChange={handleChange}
                variant='outlined'
              >
                {services.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                select
                label='Budget Range'
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                variant='outlined'
              >
                {budgetRanges.map((range) => (
                  <MenuItem key={range} value={range}>
                    {range}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label='Tell us about your project'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                variant='outlined'
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <StyledButton
                type='submit'
                variant='contained'
                size='large'
                color='primary'
                endIcon={
                  <Box component={SendIcon} sx={{ width: 18, height: 18 }} />
                }
              >
                Send Message
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ContactForm
