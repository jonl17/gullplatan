import React from 'react'
import Image from 'next/image'
import { ImageType, IMenu } from '~/types'
import MenuButtonDropdown from '../MenuButtonDropdown/MenuButtonDropdown'

type Props = {
  image: ImageType
  menu: IMenu[]
}

const DesktopFrontpage = ({ image, menu }: Props) => {
  return (
    <div className="absolute top-0 h-full w-full hidden lg:block">
      <Image
        className="absolute top-0"
        objectFit="contain"
        height={image.dimensions.height}
        width={image.dimensions.width}
        layout="responsive"
        src={image.url}
        alt={image.alt ?? 'frontpage image'}
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="text-center grid gap-2 place-content-center h-full">
          {menu.map((item, key) => (
            <MenuButtonDropdown {...item} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesktopFrontpage
