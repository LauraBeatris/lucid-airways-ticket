import type { AppProps } from 'next/app'

import { DefaultSeo } from 'components/Seo'
import { GoogleAnalytics } from 'components/GoogleAnalytics'
import 'styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
