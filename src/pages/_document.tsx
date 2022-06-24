import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/bookmania-regular.woff2'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/bookmania-black.woff2'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/chocolate.woff2'
            as='font'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
