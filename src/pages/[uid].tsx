import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { components } from '@root/slices'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { PageDocument } from '~/prismic-types.generated'
import { ImageType, ISeo } from '~/types'

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
  const page = (await client.getByUID(
    'page',
    params.uid as string
  )) as PageDocument

  const seo: ISeo = {
    title: page.data.page_title as string,
    description: page.data.page_description as string,
    image: page.data.page_image as ImageType,
  }

  return {
    props: {
      page,
      seo,
      background: page.data.background,
    },
  }
}

type Props = {
  page: PageDocument
  seo: ISeo
}

const UIDPage: NextPage<Props> = ({ page, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer />
    </>
  )
}

export default UIDPage
