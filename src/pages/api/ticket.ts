import { NextApiRequest, NextApiResponse } from 'next'

import { getScreenshot } from 'lib/chromium'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const userId = String(req.query.userId)

    if (!userId) {
      throw new Error('User ID is required')
    }

    const ticketImageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${userId}/image`

    if (isHtmlDebug) {
      return res.redirect(ticketImageUrl)
    }

    const file = await getScreenshot(ticketImageUrl, isDev)

    res.statusCode = 200

    res.setHeader('Content-Type', 'image/png')
    res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-manage=31536000, max-age=31536000'
    )

    res.end(file)
  } catch (err) {
    // TODO - Send to Sentry
    console.error(err)

    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
  }
}
