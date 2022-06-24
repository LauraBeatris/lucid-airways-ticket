import type { NextPage } from 'next'
import clsx from 'clsx'

import { Layout } from 'components/Layout'

type IntroductionHeaderProps = {
  className: string;
}

function IntroductionHeader ({ className }: IntroductionHeaderProps) {
  return (
    <div className={clsx('font-bookmania-regular text-md', className)}>
      <h2>
        Hold on tight: you're now departing to Tate Mcrae's birthday celebration, organized by her fans.
      </h2>

      <h2 className='mt-2'>
        Don't worry, and don't look back, you're safe here, and don't forget to be yourself and feel the music. Enjoy your flight!
      </h2>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <Layout
      headerClassName='flex-col md:flex-row'
      headerContent={<IntroductionHeader className='text-center max-w-md mt-2' />}
    />
  )
}

export default Home
