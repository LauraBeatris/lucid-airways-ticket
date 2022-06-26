import { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs'

import { createUser } from 'lib/database'

async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, country } = req.body

    const userId = await createUser({ name, country })

    return res.status(200).json({ userId })
  }
}

export default withSentry(handler)
