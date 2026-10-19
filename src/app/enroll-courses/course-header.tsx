'use client'

import styles from './enroll-courses.module.css'

export default function CourseHeader() {
  return (
    <header className={styles.courseHeader}>
      <a className={styles.courseBrand} href="/" aria-label="GuruApex home">
        <img src="/guruapex-mark.png" alt="" width="34" height="34" />
        <span><strong>GuruApex</strong><small>AI VIDEO TRAINING</small></span>
      </a>
      <div className={styles.headerCourseBadge}><span aria-hidden="true">✦</span> AI Video Creator · 10 Modules</div>
      <a className={styles.headerEnrollButton} href="/enroll">Enroll Now <span aria-hidden="true">→</span></a>
    </header>
  )
}
