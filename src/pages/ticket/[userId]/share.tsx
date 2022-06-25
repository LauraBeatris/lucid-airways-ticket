import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { getUser } from 'lib/database'
import { AirplaneIcon } from 'components/Icons'
import { Layout } from 'components/Layout'
import { Ticket } from 'components/Ticket'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = await getUser(String(params?.userId))

  return {
    props: {
      user
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

export default function ShareTicket ({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
  const headerText = `Join ${user.name} on tate's birthday flight`

  return (
    <Layout headerText={headerText}>
      <div className='w-full flex flex-col justify-center items-center'>

        <Link href='/'>
          <a className='gap-1 bg-ocean focus:border-white focus:border-1 text-white font-semibold p-2 rounded-lg flex flex-row justify-center items-center px-4 mt-2'>
            <AirplaneIcon className='fill-white' />
            Get your Lucid Airway ticket
          </a>
        </Link>

        <Ticket user={user} containerClassName='mt-5' />
      </div>
    </Layout>
  )
}
