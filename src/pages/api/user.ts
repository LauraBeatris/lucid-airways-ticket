import { NextApiRequest, NextApiResponse } from 'next'

import { createUser } from 'lib/database'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, country } = req.body

    const userId = await createUser({ name, country })

    return res.status(200).json({ userId })
  }
}
