import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from '@root/prismicio'
import { components } from '@root/slices'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Banner from '~/components/Banner'
import DesktopFrontpage from '~/components/DesktopFrontpage'
import Footer from '~/components/Footer'
import MobileFrontpage from '~/components/MobileFrontpage/MobileFrontpage'
import SEO from '~/components/SEO'
import StickyNavbar from '~/components/StickyNavbar/StickyNavbar'
import { HomepageDocument } from '~/prismic-types.generated'
import { serviceGlobalSettings } from '~/services'
import { ImageType, IMenu, ISeo } from '~/types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const { menu, heroImages, title } = await serviceGlobalSettings()
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  const seo: ISeo = {
    title: homepage.data.page_title as string,
    description: homepage.data.page_description as string,
    image: homepage.data.page_image as ImageType,
  }
  return {
    props: {
      menu,
      heroImages,
      title,
      seo,
      homepage,
    },
  }
}

type HomePageProps = {
  menu: any[]
  heroImages: Array<ImageType>
  title: string
  seo: ISeo
  homepage: HomepageDocument
}

const Home: NextPage<HomePageProps> = ({
  menu,
  heroImages,
  title,
  seo,
  homepage,
}) => {
  return (
    <>
      <SEO {...seo} />
      <Banner
        video={homepage.data.video as { url: string }}
        svgTitle={homepage.data.image as ImageType}
      />
      <div className="relative pt-16">
        <StickyNavbar />
        <SliceZone slices={homepage.data.slices} components={components} />
      </div>
      <Footer />
    </>
  )
}

export default Home
