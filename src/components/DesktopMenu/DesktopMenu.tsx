import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Text from '~/components/Text'
import { serviceMenu } from '~/services'
import { IMenuItem } from '~/types'

const DesktopMenu = () => {
  const { query, asPath } = useRouter()

  const [items, setItems] = useState<IMenuItem[]>([])

  useEffect(() => {
    const fetchMenu = async () => {
      const result = await serviceMenu()
      const pages: IMenuItem[] = result.data.pages.map(
        (item: { label: string; page: any }) => ({
          label: item.label,
          page: item.page,
        })
      )
      setItems(pages)
    }
    fetchMenu()
  }, [])

  if (items.length === 0) {
    return null
  }

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
        <Link key={key} passHref href={`/${item.page.uid}`}>
          <a>
            <Text
              className={query.uid === item.page.uid ? 'uppercase' : undefined}
              variant={query.uid === item.page.uid ? 'paragraph2' : 'heading3'}
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
