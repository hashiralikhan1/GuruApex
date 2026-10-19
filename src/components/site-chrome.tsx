'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/footer/footer'
import AppBar from '@/components/appbar/app-bar'
import CourseUpdateToast from '@/app/enroll-courses/course-update-toast'

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isStandalonePage = pathname === '/enroll-courses' || pathname === '/enroll'

  useEffect(() => {
    // Keep all page content readable immediately. Motion changes position only;
    // it never hides content while waiting for a scroll event.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const candidates = Array.from(document.querySelectorAll<HTMLElement>(
      'section, [data-scroll-reveal]'
    )).filter(element => {
      // Animate each section once; nested headings/cards inherit the section motion.
      return !element.parentElement?.closest('section') && !element.closest('[data-no-reveal]')
    })

    candidates.forEach((element, index) => {
      if (element.closest('[data-no-reveal]')) return
      element.classList.add('scroll-reveal')
      element.classList.remove('from-left', 'from-right')
      if (index % 2 === 0) element.classList.add('from-left')
      else element.classList.add('from-right')
      element.style.transitionDelay = `${(index % 3) * 70}ms`
    })

    if (reduceMotion || !('IntersectionObserver' in window)) {
      candidates.forEach(element => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.04, rootMargin: '0px 0px -12px 0px' })

    candidates.forEach(element => observer.observe(element))
    // Anything already on screen should animate immediately on initial load.
    candidates.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add('is-visible')
      }
    })
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      {!isStandalonePage && <AppBar />}
      {children}
      <CourseUpdateToast />
      {!isStandalonePage && <Footer />}
    </>
  )
}
