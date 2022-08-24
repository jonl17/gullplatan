import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IMenu } from '~/types'
import Navbar from '../Navbar'
import Text from '../Text'

type Props = {
  menu: IMenu[]
}

const MobileFrontpage = ({ menu }: Props) => {
  return (
    <div className="block lg:hidden px-4">
      <Navbar seperator={false} />
      <div className="grid gap-10">
        {menu.map((item, key) => (
          <button
            className="px-10 hover:text-green transition-colors"
            key={key}
          >
            <Text className="mb-5" variant="pageHeading">
              {item.label}
            </Text>
            <Image
              layout="responsive"
              height={item.image.dimensions.height}
              width={item.image.dimensions.width}
              src={item.image.url}
              alt={item.image.alt ?? 'Menu item'}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default MobileFrontpage
