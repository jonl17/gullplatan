import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { PageDocument } from '~/prismic-types.generated'
import { ImageType, ISeo } from '~/types'
import { components } from '@root/slices'
import { supabase } from '~/utils/supabaseClient'
import { useAuth } from '~/context/auth'
import Loading from '~/components/Loading'
import Login from '~/components/Login'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const page = (await client.getByUID('page', 'verkefni', {
    fetchLinks: ['project.title', 'project.subtitle'],
  })) as PageDocument

  const seo: ISeo = {
    title: (page.data.page_title as string) ?? page.data.title,
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
  const { auth } = useAuth()

  return (
    <>
      <SEO {...seo} />
      {auth === undefined && <Loading />}
      {auth === false && <Login />}
      {auth === true && (
        <>
          <SliceZone slices={page.data.slices} components={components} />
          <Footer />
        </>
      )}
    </>
  )
}

export default AllProjectsPage
