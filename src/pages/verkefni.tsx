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

// protected route
const AllProjectsPage: NextPage<Props> = ({ page, seo }) => {
  const { auth } = useAuth()

  return (
    <>
      <SEO {...seo} />
      <div
        style={{ backgroundColor: page.data.background as string }}
        className="grain"
      >
        {auth === undefined && <Loading />}
        {auth === false && <Login />}
        {auth === true && (
          <SliceZone slices={page.data.slices} components={components} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default AllProjectsPage
