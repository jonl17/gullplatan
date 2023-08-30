import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { components } from '@root/slices'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { PageDocument } from '~/prismic-types.generated'
import { ISeo, ImageType } from '~/types'

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()
  const pages = await client.getAllByType('page')

  const paths = pages
    // protected routes are ssr
    .filter((page) => !page.tags.includes('PROTECTED_ROUTE'))
    .map((page) => ({ params: { uid: page.uid as string } }))

  return {
    paths,
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

  const menu = await client.getSingle('menu')

  return {
    props: {
      page,
      seo,
      background: page.data.background,
      menu,
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
      <div
        className="grain"
        style={{ backgroundColor: page.data.background as string }}
      >
        <SliceZone slices={page.data.slices} components={components} />
      </div>
      <Footer />
    </>
  )
}

export default UIDPage
