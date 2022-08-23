import type { GetStaticProps, NextPage } from 'next'
import Text from '~/components/Text'
import Head from 'next/head'
import { createClient } from '@root/prismicio'
import { ImageType } from '~/types'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

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

type MenuItemType = {
  label: string
  url?: string
}
interface IMenu {
  label: string
  submenu: MenuItemType[]
}

const MOCK_MENU: IMenu[] = [
  {
    label: 'leiðangur',
    submenu: [
      { label: 'Leiðangur 77', url: '/leiðangur-77' },
      { label: 'Leiðangur 23', url: '/leiðangur-23' },
    ],
  },
  {
    label: 'þátttaka',
    submenu: [
      { label: 'Þáttaka', url: '/þáttaka' },
      { label: 'Kosning' },
      { label: 'Íslandsskort' },
    ],
  },
]

const SubmenuItem = ({ label, url }: MenuItemType) => {
  const [hovered, setHovered] = useState(false)

  if (url) {
    return (
      <li>
        <Link passHref href={url}>
          <a
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Text className="mb-1" variant="heading3">
              {label}
            </Text>
            <span
              className={cn(
                'absolute left-0 bottom-0 h-1 w-full bg-green transition-all',
                {
                  'w-full': hovered,
                  'w-0': !hovered,
                }
              )}
            />
          </a>
        </Link>
      </li>
    )
  }

  return (
    <li>
      <div className="inline-flex">
        <Text variant="heading3">{label}</Text>
        <Text className="ml-2" variant="paragraph2">
          {'(væntanlegt)'}
        </Text>
      </div>
    </li>
  )
}

const MenuButton = ({ label, submenu }: IMenu) => {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn('overflow-hidden transition-colors', {
        'text-cream hover:text-green': !open,
        'text-green': open,
      })}
    >
      <Text variant="pageHeading">{label}</Text>
      <ul
        className={cn('grid gap-3 transition-all', {
          'hide-vertically text-cream': !open,
          'clip-path-0 text-green': open,
        })}
      >
        {submenu.map((item, key) => (
          <SubmenuItem {...item} key={key} />
        ))}
      </ul>
    </button>
  )
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Gullplatan</title>
      </Head>
      <div className="h-screen text-cream relative">
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
            <div className="text-center grid gap-2 place-content-center h-full">
              {MOCK_MENU.map((item, key) => (
                <MenuButton {...item} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
