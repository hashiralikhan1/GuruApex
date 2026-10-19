'use client'

import { useEffect, useState } from 'react'
import styles from './course-update-toast.module.css'

// These are verified course facts, not fabricated claims about individual students.
const updates = [
  { title: 'GuruApex AI Video Training', detail: 'Current course fee: PKR 2,000' },
  { title: '10 practical learning modules', detail: 'Explore the complete course outline' },
  { title: 'Enrollment is open', detail: 'Review the details before reserving a seat' },
  { title: 'Learn at your own pace', detail: 'Practice the workflow step by step' },
]

export default function CourseUpdateToast() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    let hideTimer: number | undefined
    const reveal = () => {
      setVisible(true)
      if (hideTimer !== undefined) window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => setVisible(false), 12000)
    }
    const firstTimer = window.setTimeout(reveal, 5000)
    const rotateTimer = window.setInterval(() => {
      setIndex(current => (current + 1) % updates.length)
      reveal()
    }, 50000)
    return () => {
      window.clearTimeout(firstTimer)
      window.clearInterval(rotateTimer)
      if (hideTimer !== undefined) window.clearTimeout(hideTimer)
    }
  }, [])

  if (dismissed) return null
  const update = updates[index]

  return (
    <aside className={`${styles.toast} ${visible ? styles.visible : ''}`} role="status" aria-live="polite">
      <span className={styles.icon} aria-hidden="true">✓</span>
      <span className={styles.copy}>
        <strong>{update.title}</strong>
        <small>{update.detail}</small>
      </span>
      <button type="button" onClick={() => setDismissed(true)} aria-label="Dismiss course update">×</button>
    </aside>
  )
}
