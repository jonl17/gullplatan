import { createClient, linkResolver } from '@root/prismicio'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DesktopFrontpage from '~/components/DesktopFrontpage'
import MobileFrontpage from '~/components/MobileFrontpage/MobileFrontpage'
import { serviceGlobalSettings } from '~/services'
import { ImageType, IMenu } from '~/types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const { menu, heroImages, title } = await serviceGlobalSettings()
  return {
    props: {
      menu,
      heroImages,
      title,
    },
  }
}

type HomePageProps = {
  menu: any[]
  heroImages: Array<ImageType>
  title: string
}

const Home: NextPage<HomePageProps> = ({ menu, heroImages, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <DesktopFrontpage heroImages={heroImages} menu={menu} />
      <MobileFrontpage menu={menu} />
    </>
  )
}

export default Home
