import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import { ProjectDocument } from '~/prismic-types.generated'
import { ImageType, ISeo } from '~/types'
import { components } from '@root/slices'
import { supabase } from '~/utils/supabaseClient'
import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import Login from '~/components/Login'
import Text from '~/components/Text'
import { useSession } from '~/store/session'

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
  // const { loggedin } = useSession()

  // console.log(loggedin)

  const loggedin = true

  return (
    <>
      <SEO {...seo} />
      {loggedin ? (
        <SliceZone slices={project.data.slices} components={components} />
      ) : (
        <Login />
      )}
    </>
  )
}

export default ProjectPage
