import { createClient, linkResolver } from '@root/prismicio'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import DesktopFrontpage from '~/components/DesktopFrontpage'
import MobileFrontpage from '~/components/MobileFrontpage/MobileFrontpage'
import { ImageType, IMenu } from '~/types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  const globalSettings = await client.getSingle('global_settings')
  const menuIds = globalSettings.data.main_menu.map((item: any) => item.menu.id)
  const menu = await client.getAllByIDs(menuIds)
  const heroImages: Array<ImageType> = [globalSettings.data.front_left_image, globalSettings.data.front_right_image]
  return {
    props: {
      desktopImage: homepage.data.image,
      menu,
      heroImages
    },
  }
}

type HomePageProps = {
  desktopImage: ImageType
  menu: any[]
  heroImages: Array<ImageType>
}

const Home: NextPage<HomePageProps> = ({ menu, heroImages }) => {
  const mainmenu: IMenu[] = menu.map((item) => ({
    label: item.data.label,
    submenu: item.data.submenu.map((item: any) => ({
      label: item.label,
      url: linkResolver(item.link),
    })),
    image: item.data.image,
  }))
  return (
    <>
      <Head>
        <title>Gullplatan</title>
      </Head>
      <DesktopFrontpage heroImages={heroImages} menu={mainmenu} />
      <MobileFrontpage menu={mainmenu} />
    </>
  )
}

export default Home
