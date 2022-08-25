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
  return {
    props: {
      desktopImage: homepage.data.image,
      menu,
    },
  }
}

type HomePageProps = {
  desktopImage: ImageType
  menu: any[]
}

const Home: NextPage<HomePageProps> = ({ desktopImage, menu }) => {
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
      <div className="h-screen text-cream relative">
        <DesktopFrontpage image={desktopImage} menu={mainmenu} />
        <MobileFrontpage menu={mainmenu} />
      </div>
    </>
  )
}

export default Home
