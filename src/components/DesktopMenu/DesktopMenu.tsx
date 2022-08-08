import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Text from '~/components/Text'
import { IMenuItem } from '~/types'

type Props = {
  items: IMenuItem[]
}

const DesktopMenu = ({ items }: Props) => {
  const { query, asPath } = useRouter()

  return (
    <div className="gap-3 h-[85px] absolute bottom-0 right-0 hidden md:flex">
      <Link passHref href="/">
        <a>
          <Text
            className="uppercase"
            variant={asPath === '/' ? 'paragraph2' : 'heading3'}
          >
            Forsíða
          </Text>
        </a>
      </Link>
      {items.map((item, key) => (
        <Link key={key} passHref href={item.slug}>
          <a>
            <Text
              className={query.slug === item.slug ? 'uppercase' : undefined}
              variant={query.slug === item.slug ? 'paragraph2' : 'heading3'}
            >
              {item.label}
            </Text>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default DesktopMenu
