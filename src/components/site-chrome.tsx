'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/footer/footer'
import AppBar from '@/components/appbar/app-bar'

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const selector = 'h1, h2, h3, h4, p, img, picture, figure, [data-scroll-reveal]'
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(el => {
      if (el.closest('[data-no-reveal], header, nav, footer, [role="dialog"]')) return false
      // Avoid overriding Framer Motion's own transforms or animated ancestors.
      if (el.closest('[style*="transform"], [style*="opacity"]')) return false
      if (el.matches('[style*="transform"], [style*="opacity"]')) return false
      return !el.closest('.scroll-reveal')
    })
    candidates.forEach((el, index) => {
      el.classList.add('scroll-reveal')
      el.classList.toggle('reveal-media', el.matches('img, picture, figure'))
      el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
    })
    if (reduceMotion || !('IntersectionObserver' in window)) {
      candidates.forEach(el => el.classList.add('is-visible'))
      return () => candidates.forEach(el => { el.classList.remove('scroll-reveal', 'reveal-media', 'is-visible'); el.style.removeProperty('--reveal-delay') })
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' })
    candidates.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        el.classList.add('is-visible')
      } else {
        observer.observe(el)
      }
    })
    return () => {
      observer.disconnect()
      candidates.forEach(el => { el.classList.remove('scroll-reveal', 'reveal-media', 'is-visible'); el.style.removeProperty('--reveal-delay') })
    }
  }, [pathname])

  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  )
}
