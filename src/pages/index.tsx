import { asLink } from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { components } from '@root/slices'
import type { GetStaticProps, NextPage } from 'next'
import Alien from '~/components/Alien'
import Banner from '~/components/Banner'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import Seperator from '~/components/Seperator/Seperator'
import StickyNavbar from '~/components/StickyNavbar/StickyNavbar'
import { HomepageDocument, PageDocument } from '~/prismic-types.generated'
import { serviceGlobalSettings } from '~/services'
import { ISeo, ImageType } from '~/types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const { menu, heroImages, title } = await serviceGlobalSettings()
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  const seo: ISeo = {
    title: homepage.data.page_title as string,
    description: homepage.data.page_description as string,
    image: homepage.data.page_image as ImageType,
  }

  const page1 = await client.getByUID('page', 'leiðangur-77')
  const page2 = await client.getByUID('page', 'leiðangur-23')

  return {
    props: {
      menu,
      heroImages,
      title,
      seo,
      homepage,
      pages: [page1, page2],
    },
  }
}

type HomePageProps = {
  menu: any[]
  heroImages: Array<ImageType>
  title: string
  seo: ISeo
  homepage: HomepageDocument
  pages: [PageDocument, PageDocument]
}

const Home: NextPage<HomePageProps> = ({ seo, homepage, pages }) => {
  return (
    <>
      <SEO {...seo} />
      <Banner
        video={[
          {
            url: asLink(homepage.data.video) as string,
            type: 'video/webm',
          },
          {
            url: asLink(homepage.data.video_backup) as string,
            type: "video/mp4; codecs=hvc1'",
          },
        ]}
        svgTitle={homepage.data.image as ImageType}
      />

      <div className="relative bg-deep-purple grain pt-6">
        <Seperator className="top-0" />

        <StickyNavbar />

        <div className="relative">
          <SliceZone slices={homepage.data.slices} components={components} />
        </div>

        {/* a simple hack to display chosen page slices on the homepage */}
        {pages.map((page, key) => (
          <div
            style={{ backgroundColor: page.data.background as string }}
            className="grain"
            key={key}
          >
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        ))}
      </div>
      <Footer />
      <Alien />
    </>
  )
}

export default Home
