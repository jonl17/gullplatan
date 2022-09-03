import Head from 'next/head'
import { useSinglePrismicDocument } from '@prismicio/react'

export default function SEO() {
  const [result, state] = useSinglePrismicDocument('global_settings')

  const image = result?.data.link_share_image.url
  const description =
    'Sendum tónlist út í geim! er þverfaglegt þátttökuverkefni fyrir börn. Það er innblásið af Gullplötunni ,,Sounds of Earth” sem var send út í geim árið 1977 af NASA (hlekkur á umfjöllun annars staðar á síðunni). Hópur hönnuða, vísindamanna og tónlistarfólks bjóða nú börnum um land allt í ferðalag um óravíddir tónlistar sem teygir sig út í geim og aftur heim.'

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

      <>
        <meta property="description" name="description" content={description} />
        <meta
          property="og:description"
          name="og:description"
          content={description}
        />
        <meta name="twitter:description" content={description} />
      </>
    </Head>
  )
}
