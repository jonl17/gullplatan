import { createClient, linkResolver } from '@root/prismicio'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DesktopFrontpage from '~/components/DesktopFrontpage'
import MobileFrontpage from '~/components/MobileFrontpage/MobileFrontpage'
import SEO from '~/components/SEO'
import { serviceGlobalSettings } from '~/services'
import { ImageType, IMenu, ISeo } from '~/types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const { menu, heroImages, title } = await serviceGlobalSettings()
  const client = createClient({ previewData })
  const result = await client.getSingle('homepage')
  const seo: ISeo = {
    title: result.data.page_title as string,
    description: result.data.page_description as string,
    image: result.data.page_image as ImageType,
  }
  return {
    props: {
      menu,
      heroImages,
      title,
      seo,
    },
  }
}

type HomePageProps = {
  menu: any[]
  heroImages: Array<ImageType>
  title: string
  seo: ISeo
}

const Home: NextPage<HomePageProps> = ({ menu, heroImages, title, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <DesktopFrontpage heroImages={heroImages} menu={menu} />
      <MobileFrontpage menu={menu} />
    </>
  )
}

export default Home
