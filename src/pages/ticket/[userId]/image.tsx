import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { Ticket } from 'components/Ticket'
import { getUser } from 'lib/database'

export default function TicketImage ({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className='w-[1200px] h-[630px] bg-repeat-y bg-clouds bg-100% grid place-content-center'>
      <Head>
        <meta name='robots' content='noindex' />
      </Head>

      <Ticket user={user} />
    </main>
  )
}

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
