import cn from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import { IMenu } from '~/types'
import Text from '../Text'

const MenuItem = ({ label, image, submenu }: IMenu) => {
  const [open, setOpen] = useState(false)

  return (
    <button
      className={cn("p-10 w-full h-full hover:text-green transition-colors relative", {
        'text-green': open,
        'text-cream': !open
      })}
      onClick={() => setOpen(!open)}
    >
      <Text variant="pageHeading">
        {label}
      </Text>
      <div>
        <Image
          layout="responsive"
          objectFit='contain'
          height={image.dimensions.height}
          width={image.dimensions.width}
          src={image.url}
          alt={image.alt ?? 'Menu item'}
          className={cn('transition-opacity', {
            'opacity-100': !open,
            'opacity-0': open
          })}
        />
      </div>

    </button>
  )
}

type Props = {
  menu: IMenu[]
}

const MobileFrontpage = ({ menu }: Props) => {
  return (
    <div className="block h-full lg:hidden px-4">
      <div className="grid align-middle h-full">
        {menu.map((item, key) => (
          <MenuItem {...item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default MobileFrontpage
