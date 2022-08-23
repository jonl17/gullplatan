import { createClient } from '@root/prismicio'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { SliceZone } from '@prismicio/react'
import { components } from '@root/slices'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

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
  return (
    <>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <Navbar />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer />
    </>
  )
}

export default UIDPage
