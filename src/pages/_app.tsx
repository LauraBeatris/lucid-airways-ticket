import type { AppProps } from 'next/app'

import { DefaultSeo } from 'components/Seo'

import 'styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
