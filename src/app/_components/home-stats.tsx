'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '+', label: 'Industry Awards' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (!active) return
    if (reducedMotion) { setCount(value); return }
    let frame = 0
    const duration = 1800
    let start: number | null = null
    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reducedMotion, value])
  return <>{count}{suffix}</>
}

export default function HomeStats() {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const section = ref.current
    if (!section) return
    const activate = () => setActive(true)
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) activate()
    if (!('IntersectionObserver' in window)) {
      activate()
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        activate()
        observer.disconnect()
      }
    }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])
  return (
    <Box component="section" ref={ref} aria-label="GuruApex results and experience" sx={{ py: { xs: 5, md: 7 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,minmax(0,1fr))', md: 'repeat(4,minmax(0,1fr))' }, gap: { xs: 3, md: 4 }, textAlign: 'center' }}>
          {stats.map((item, index) => (
            <Box key={item.label} component={motion.div} initial={{ opacity: 1, x: index % 2 === 0 ? -22 : 22 }} animate={active ? { opacity: 1, x: 0 } : { opacity: 1, x: index % 2 === 0 ? -22 : 22 }} transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}>
              <Typography component="p" sx={{ color: '#7C3AED', fontSize: { xs: 34, md: 48 }, fontWeight: 850, lineHeight: 1.1, letterSpacing: '-.04em' }}><Counter value={item.value} suffix={item.suffix} active={active} /></Typography>
              <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: { xs: 13, md: 16 } }}>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
