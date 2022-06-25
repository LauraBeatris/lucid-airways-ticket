import { DefaultSeo as NextDefaultSeo } from 'next-seo'

const title = 'Lucid Airways Ticket'
const url = process.env.NEXT_PUBLIC_APP_URL

export function DefaultSeo () {
  return (
    <NextDefaultSeo
      title={title}
      description="Hold on tight: you're now departing to Tate Mcrae's birthday celebration, organized by her fans."
      openGraph={{
        url,
        title,
        images: [
          {
            url: `${url}/images/default-banner.png`,
            width: 1200,
            height: 630
          }
        ]
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/images/icons/fav.png'
        }
      ]}
    />
  )
}
