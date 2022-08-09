import { createClient } from '@root/prismicio'

export const serviceMenu = async () => {
  const client = createClient()
  const result = await client.getSingle('menu')
  return result
}
