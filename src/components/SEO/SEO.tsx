import Head from 'next/head'
import { useSinglePrismicDocument } from '@prismicio/react'

export default function SEO() {
  const [result, state] = useSinglePrismicDocument('global_settings')

  const image = result?.data.link_share_image.url
  const description = result?.data.page_description

  return (
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png"></link>
      <title>{result?.data.page_title ?? 'Gullplatan'}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {image && (
        <>
          <meta property="og:image" name="og:image" content={image} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}

      {description && (
        <>
          <meta
            property="description"
            name="description"
            content={description}
          />
          <meta
            property="og:description"
            name="og:description"
            content={description}
          />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </Head>
  )
}
