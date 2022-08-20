import type { GetStaticProps, NextPage } from 'next'
import Text from '~/components/Text'
import Head from 'next/head'
import { createClient } from '@root/prismicio'
import { ImageType } from '~/types'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  return {
    props: {
      data: homepage.data,
    },
  }
}

type HomePageProps = {
  data: {
    image: ImageType
  }
}

const MOCK_MENU = [{ label: 'leiðangur' }, { label: 'þátttaka' }]

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Gullplatan</title>
      </Head>
      <div className="h-screen text-cream container relative">
        <div className="absolute top-0 h-full w-full">
          <Image
            className="absolute top-0"
            objectFit="contain"
            height={data.image.dimensions.height}
            width={data.image.dimensions.width}
            layout="responsive"
            src={data.image.url}
            alt={data.image.alt ?? 'frontpage image'}
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="text-center grid gap-10 mt-44">
              {MOCK_MENU.map((item, key) => (
                <Text key={key} variant="pageHeading">
                  {item.label}
                </Text>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
