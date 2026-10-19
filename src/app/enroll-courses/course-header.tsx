
'use client'

import Link from 'next/link'
import styles from './enroll-courses.module.css'

export default function CourseHeader() {
  return (
    <header className={styles.courseHeader}>
      <Link
        className={styles.courseBrand}
        href="/"
        aria-label="GuruApex home"
      >
        <img src="/guruapex-mark.png" alt="" width="34" height="34" />
        <span>
          <strong>GuruApex</strong>
          <small>AI VIDEO TRAINING</small>
        </span>
      </Link>

      <div className={styles.headerCourseBadge}>
        <span aria-hidden="true">✦</span> AI Video Creator · 10 Modules
      </div>

      <Link className={styles.headerEnrollButton} href="/enroll">
        Enroll Now <span aria-hidden="true">→</span>
      </Link>
    </header>
  )
}
