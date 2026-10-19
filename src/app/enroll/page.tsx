import type { Metadata } from 'next'
import EnrollFlow from './enroll-flow'

export const metadata: Metadata = {
  title: 'Enroll in AI Video Creator Training | GuruApex',
  description: 'Reserve your place in GuruApex AI Video Creator training for PKR 2,000. Complete your details, review payment instructions, and upload payment proof.',
  robots: { index: false, follow: false },
}

export default function EnrollPage() { return <EnrollFlow /> }
