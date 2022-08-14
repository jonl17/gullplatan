import { createClient } from '@root/prismicio'

export const serviceMenu = async () => {
  const client = createClient()
  const result = await client.getSingle('menu')
  return result
}

export const serviceFooter = async () => {
  const client = createClient()
  const result = await client.getSingle('footer')
  return result.data
}
