import { Layout } from 'components/Layout'
import { Ticket } from 'components/Ticket'

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

export default function TicketDetails () {
  return (
    <Layout headerText="you're ready to fly to tate's birthday!">
      <>
        <h2 className='text-center font-bookmania-regular'>
          share your adventure with the world and follow Tate's fanbases on social media
          to be ready for your flight on <strong className='underline text-ocean'>July 1</strong>:
          <ul className='grid grid-cols-3 grid-rows-3 text-ocean font-bold'>
            {Object.keys(mapTwitterUsernameToUrl).map((twitterUsername) => {
              const href = mapTwitterUsernameToUrl[
              twitterUsername as keyof typeof mapTwitterUsernameToUrl
              ]

              return (
                <li key={twitterUsername}>
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
        </h2>

        <Ticket containerClassName='mt-5' />
      </>
    </Layout>
  )
}
