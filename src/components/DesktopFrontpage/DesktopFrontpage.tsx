import Image from 'next/image'
import React from 'react'
import { ImageType, IMenu } from '~/types'
import MenuButtonDropdown from '../MenuButtonDropdown/MenuButtonDropdown'

type Props = {
  image: ImageType
  menu: IMenu[]
}

const DesktopFrontpage = ({ image, menu }: Props) => {
  return (
    <div className="relative top-0 min-h-screen w-full hidden lg:block">
      <Image
        className="absolute top-0 h-full"
        objectFit="contain"

        layout="fill"
        src={image.url}
        alt={image.alt ?? 'frontpage image'}
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="text-center grid pt-10 gap-2 place-content-center h-full">
          {menu.map((item, key) => (
            <MenuButtonDropdown {...item} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesktopFrontpage
