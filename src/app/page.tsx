import { JSX } from 'react'
import Stack from '@mui/material/Stack'

import HomeStats from './_components/home-stats'
import HomeHero from './_components/home-hero'
import HomeAbout from './_components/home-about'
import HomeMotivation from './_components/home-our-motivation'
import HomeServices from './_components/home-services'
import HomeCTA from './_components/home-cta'
import HomeContact from './_components/home-contact'

const HomePage = (): JSX.Element => {
  return (
    <Stack direction='column'>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeMotivation />
      <HomeServices />
      <HomeCTA />
      <HomeContact />
    </Stack>
  )
}

export default HomePage
