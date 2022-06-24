import type { NextPage } from 'next'
import clsx from 'clsx'

import { Layout } from 'components/Layout'
import { Ticket } from 'components/Ticket'
import { TicketIcon } from 'components/Icons'

type IntroductionHeaderProps = {
  className: string;
}

function IntroductionHeader ({ className }: IntroductionHeaderProps) {
  return (
    <div className={clsx('font-bookmania-regular text-lg', className)}>
      <h2>
        Hold on tight: you're now departing to Tate Mcrae's birthday celebration, organized by her fans.
      </h2>

      <h2 className='mt-2'>
        Don't worry, and don't look back, you're safe here, and don't forget to be yourself and feel the music. Enjoy your flight!
      </h2>
    </div>
  )
}

function ModalButton () {
  return (
    <div className='mt-4 flex justify-center'>
      <button
        className='bg-button text-white font-semibold p-2 rounded-lg flex flex-row justify-center items-center px-4'
      >
        <div className='relative mr-2'>
          <TicketIcon className='fill-white' />
        </div>

        Click to guarantee your ticket
      </button>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <Layout
      headerClassName='flex-col md:flex-row'
      headerContent={<IntroductionHeader className='text-center md:text-left max-w-md mt-2' />}
    >
      <>
        <ModalButton />

        <Ticket containerClassName='mt-5' />
      </>
    </Layout>
  )
}

export default Home
