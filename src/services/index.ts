import { getClient } from '@cms/sanity'
import { groq } from 'next-sanity'

export const servicePageData = async (slug: string) => {
  const query = groq`
    *[_type == "page" && slug.current == $slug] {
      title,
      subtitle
    }
  `
  const result = await getClient().fetch(query, { slug })
  return result[0]
}

export const serviceAllPageSlugs = async () => {
  const query = groq`
    *[_type == "page"] {
      slug
    }
  `
  const result = await getClient().fetch(query)
  const slugs: string[] = result.map(
    (item: { slug: { current: string } }) => item.slug.current
  )
  return slugs
}
