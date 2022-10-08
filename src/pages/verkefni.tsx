import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { GetServerSideProps, NextPage } from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { PageDocument } from '~/prismic-types.generated'
import { ImageType, ISeo } from '~/types'
import { components } from '@root/slices'
import { supabase } from '~/utils/supabaseClient'

export const getServerSideProps: GetServerSideProps = async ({
  params,
  previewData,
}) => {
  const { data } = await supabase.auth.getSession()

  if (!data.session?.user) {
    return {
      redirect: {
        destination: '/innskraning',
        permanent: false,
      },
    }
  }

  const client = createClient({ previewData })
  const page = (await client.getByUID('page', 'verkefni')) as PageDocument

  const seo: ISeo = {
    title: page.data.page_title as string,
    description: page.data.page_description as string,
    image: page.data.page_image as ImageType,
  }

  return {
    props: {
      page,
      seo,
    },
  }
}

type Props = {
  page: PageDocument
  seo: ISeo
}

// protected route
const AllProjectsPage: NextPage<Props> = ({ page, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer />
    </>
  )
}

export default AllProjectsPage
