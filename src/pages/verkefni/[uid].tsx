import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { GetServerSideProps, NextPage } from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { ProjectDocument } from '~/prismic-types.generated'
import { ImageType, ISeo } from '~/types'
import { components } from '@root/slices'
import { supabase } from '~/utils/supabaseClient'

export const getServerSideProps: GetServerSideProps = async ({
  params,
  previewData,
}) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

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
  const project = (await client.getByUID(
    'project',
    params.uid as string
  )) as ProjectDocument

  const seo: ISeo = {
    title: `Verkefni: ${project.data.page_title as string}`,
    description: project.data.page_description as string,
    image: project.data.page_image as ImageType,
  }

  return {
    props: {
      project,
      seo,
    },
  }
}

type Props = {
  project: ProjectDocument
  seo: ISeo
}

const ProjectPage: NextPage<Props> = ({ project, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <SliceZone slices={project.data.slices} components={components} />
      <Footer />
    </>
  )
}

export default ProjectPage
