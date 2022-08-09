import { createClient, linkResolver } from '@root/prismicio'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { SliceZone } from '@prismicio/react'
import { components } from '@root/slices'

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()
  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => ({ params: { uid: page.uid as string } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid as string)

  return {
    props: {
      page,
    },
  }
}

type Props = {
  page: any
}

const UIDPage: NextPage<Props> = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default UIDPage
