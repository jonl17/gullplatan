import Head from 'next/head'
import { ISeo } from '~/types'

export default function SEO({ title, description, image }: ISeo) {
  return (
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png"></link>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" name="og:image" content={image.url} />
      <meta name="twitter:image" content={image.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="description" name="description" content={description} />
      <meta
        property="og:description"
        name="og:description"
        content={description}
      />
      <meta name="twitter:description" content={description} />
      <html lang="is" />
    </Head>
  )
}
