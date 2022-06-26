import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

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
  const ogTitle = `Join ${user.name} on Tate's Birthday Flight | Lucid Airways Ticket`
  const ogDescription = `Join ${user.name} on Tate's Birthday Flight`

  const shareUrl = `https://${process.env.NEXT_PUBLIC_APP_URL}.com/ticket/${user.id}/share`
  const imageUrl = `https://${process.env.NEXT_PUBLIC_APP_URL}/ticket.png?userId=${user.id}`

  return (
    <>
      <NextSeo title={ogTitle} />

      <Head>
        <meta property='og:image' content={imageUrl} />
        <meta property='og:image:secure_url' content={imageUrl} />
        <meta name='twitter:image' content={imageUrl} />
        <meta name='twitter:image:src' content={imageUrl} />
        <meta name='description' content={ogDescription} />
        <meta property='og:url' content={shareUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:locale' content='en_us' />
        <meta property='og:site_name' content={ogTitle} />
        <meta property='og:image:alt' content={ogTitle} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={ogTitle} />
        <meta name='twitter:site' content='@tatemcrae' />
        <meta name='twitter:creator' content='@lauradotjs' />
        <meta name='twitter:image:alt' content={ogTitle} />
        <meta name='twitter:image:width' content='1200' />
        <meta name='twitter:image:height' content='630' />
        <link rel='canonical' href={shareUrl} />
        <meta name='robots' content='noindex' />
      </Head>

      <Layout headerText={ogDescription.toLowerCase()}>
        <div className='w-full flex flex-col justify-center items-center'>
          <Link href='/'>
            <a className='gap-1 bg-ocean focus:border-white focus:border-1 text-white font-semibold p-2 rounded-lg flex flex-row justify-center items-center px-4 mt-2'>
              <AirplaneIcon className='fill-white' />
              Get your Lucid Airways ticket
            </a>
          </Link>

          <Ticket user={user} containerClassName='mt-5' />
        </div>
      </Layout>
    </>
  )
}
