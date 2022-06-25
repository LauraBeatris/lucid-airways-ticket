import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Layout } from 'components/Layout'
import { Ticket } from 'components/Ticket'
import { getUser, UserData } from 'lib/database'
import { CheckIcon, CopyIcon, TwitterIcon } from 'components/Icons'

const mapTwitterUsernameToUrl = {
  infotatebr: 'https://twitter.com/InfoTateBR',
  TateMcRaeStats: 'https://twitter.com/TateMcRaeStats',
  McRaeStats: 'https://twitter.com/McRaeStats',
  TateMcRaeSP: 'https://twitter.com/TateMcRaeSP',
  tatecomfort: 'https://twitter.com/tatecomfort',
  TateMcRaeUpdate: 'https://twitter.com/TateMcRaeUpdate',
  t8mcraetours: 'https://twitter.com/t8mcraetours',
  McRaesHQ: 'https://twitter.com/McRaesHQ',
  upmcraebr: 'https://twitter.com/upmcraebr'
}

type TicketDetailsProps = {
  user: UserData
}

export default function TicketDetails ({ user }: TicketDetailsProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyClick = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  const shareLink = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${user.id}/share`

  return (
    <Layout headerText="you're ready to fly to tate's birthday!">
      <div className='w-full flex flex-col justify-center items-center'>
        <h2 className='text-center font-bookmania-black'>
          share your adventure with the world and follow Tate's fanbases on social media
          to be ready for your flight on <strong className='underline text-ocean'>July 1</strong>:
        </h2>
        <ul className='font-bookmania-regular gap-1 flex flex-wrap  max-w-[50vw] leading-none gap-2 text-ocean font-bold justify-around list-none text-center'>
          {Object.keys(mapTwitterUsernameToUrl).map((twitterUsername) => {
            const href = mapTwitterUsernameToUrl[
              twitterUsername as keyof typeof mapTwitterUsernameToUrl
            ]

            return (
              <li key={twitterUsername} className='inline'>
                <a
                  className='underline'
                  href={href}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  @{twitterUsername}
                </a>
              </li>
            )
          })}
        </ul>

        <div className='flex w-full justify-center gap-2 mt-3'>
          <a className='bg-ocean focus:border-white focus:border-1 text-white font-semibold p-2 rounded-lg flex flex-row justify-center items-center px-2'>
            <TwitterIcon className='fill-white' />
          </a>

          <CopyToClipboard
            text={shareLink}
            onCopy={handleCopyClick}
          >
            <button className='flex-1 max-w-[200px] gap-1 bg-ocean focus:border-white focus:border-1 text-white font-semibold p-2 rounded-lg flex flex-row justify-center items-center px-4'>
              {isCopied
                ? (
                  <>
                    <CheckIcon className='fill-white w-4 h-4' />
                    Copied
                  </>
                  )
                : (
                  <>
                    <CopyIcon className='fill-white' />
                    Copy ticket link
                  </>
                  )}
            </button>
          </CopyToClipboard>
        </div>

        <Ticket user={user} containerClassName='mt-5' />
      </div>
    </Layout>
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
