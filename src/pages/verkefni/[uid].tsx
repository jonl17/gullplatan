import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { ProjectDocument } from '~/prismic-types.generated'
import { ImageType, ISeo } from '~/types'
import { components } from '@root/slices'
import Login from '~/components/Login'
import { useAuth } from '~/context/auth'
import Loading from '~/components/Loading'

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()
  const pages = await client.getAllByType('project')

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
  const project = (await client.getByUID(
    'project',
    params.uid as string
  )) as ProjectDocument

  const seo: ISeo = {
    title: `Verkefni: ${
      (project.data.page_title as string) ?? project.data.title
    }`,
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
  const { auth } = useAuth()

  return (
    <>
      <SEO {...seo} />

      {auth === undefined && <Loading />}
      {auth === false && <Login />}
      {auth === true && (
        <>
          <SliceZone slices={project.data.slices} components={components} />
          <Footer />
        </>
      )}
    </>
  )
}

export default ProjectPage
