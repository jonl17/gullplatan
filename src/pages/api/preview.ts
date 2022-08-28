import { redirectToPreviewURL, setPreviewData } from '@prismicio/next'
import { createClient, linkResolver } from '@root/prismicio'

const Preview = async (req: any, res: any) => {
  const client = createClient({ req })

  await setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client, linkResolver })
}

export default Preview