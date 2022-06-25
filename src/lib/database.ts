import { Redis } from '@upstash/redis'
import { nanoid } from 'nanoid'

const redisConnection = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

type UserData = {
  name: string;
  country: string;
}

function transformNameToId (name: string) {
  const nameSlug = name.toLowerCase()
    .trim()
    .replace(/[^\w- ]+/g, '')
    .replace(/ /g, '-')
    .replace(/[-]+/g, '-')

  return `${nameSlug}-${nanoid()}`
}

export async function createUser (data: UserData) {
  const userId = transformNameToId(data.name)

  await redisConnection.hsetnx('users', userId, data)

  return userId
}

// export async function getUser (userId: string) {
//   const userRaw = await redisConnection.hget<UserData>('users', userId)

//   if (!userRaw) {
//     return null
//   }

//   return userRaw
// }
