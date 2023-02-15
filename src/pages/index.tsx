import { asLink } from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient } from '@root/prismicio'
import { components } from '@root/slices'
import type { GetStaticProps, NextPage } from 'next'
import Alien from '~/components/Alien'
import Banner from '~/components/Banner'
import BurgerMenu from '~/components/BurgerMenu/BurgerMenu'
import Footer from '~/components/Footer'
import SEO from '~/components/SEO'
import Seperator from '~/components/Seperator/Seperator'
import StickyNavbar from '~/components/StickyNavbar/StickyNavbar'
import Voyager from '~/components/Voyager/Voyager'
import {
  HomepageDocument,
  MenuDocument,
  PageDocument,
} from '~/prismic-types.generated'
import { serviceGlobalSettings } from '~/services'
import { useBurgerMenu } from '~/store/burger-menu'
import { IMenu, ISeo, ImageType } from '~/types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const { heroImages, title } = await serviceGlobalSettings()
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  const seo: ISeo = {
    title: homepage.data.page_title as string,
    description: homepage.data.page_description as string,
    image: homepage.data.page_image as ImageType,
  }

  const page1 = await client.getByUID('page', 'leiðangur-77')
  const page2 = await client.getByUID('page', 'leiðangur-23')

  const menu = await client.getSingle('menu')

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
  heroImages: Array<ImageType>
  title: string
  seo: ISeo
  homepage: HomepageDocument
  pages: [PageDocument, PageDocument]
}

const Home: NextPage<HomePageProps> = ({ seo, homepage, pages }) => {
  return (
    <div className="relative">
      <SEO {...seo} />
      <Banner
        video={[
          {
            url: asLink(homepage.data.video_backup) as string,
            type: 'video/mp4; codecs=hvc1',
          },
          {
            url: asLink(homepage.data.video) as string,
            type: 'video/webm',
          },
        ]}
        placeholder={homepage.data.image as ImageType}
      />

      <div className="relative bg-deep-purple grain pt-16">
        <Seperator double className="top-0 text-green h-6 md:h-12" />

        <StickyNavbar />

        <div className="relative">
          <SliceZone slices={homepage.data.slices} components={components} />
        </div>

        {/* a simple hack to display chosen page slices on the homepage */}
        {pages.map((page, key) => (
          <div
            id={page.uid}
            style={{ backgroundColor: page.data.background as string }}
            className="grain"
            key={key}
          >
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        ))}
      </div>
      <Footer />
      <span className="h-full w-full overflow-hidden absolute top-0 left-0 pointer-events-none">
        <Voyager />
      </span>
    </div>
  )
}

export default Home
