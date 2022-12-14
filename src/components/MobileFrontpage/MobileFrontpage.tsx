import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IMenu } from '~/types'
import ContactInfo from '../ContactInfo/ContactInfo'
import SubmenuItem from '../SubmenuItem'
import SvgTitle from '../SvgTitle'
import Text from '../Text'

const MenuItem = ({ label, image, submenu, svgImage }: IMenu) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        'py-10 px-5 w-full h-full hover:text-green transition-colors relative',
        {
          'text-green': open,
          'text-cream': !open,
        }
      )}
    >
      <button className="w-[200px]" onClick={() => setOpen(!open)}>
        {svgImage ? (
          <SvgTitle image={svgImage} />
        ) : (
          <Text variant="pageHeading">{label}</Text>
        )}
      </button>

      <div className="p-0 relative">
        <div className="absolute top-4 w-full h-full">
          <Image
            layout="responsive"
            objectFit="contain"
            height={image.dimensions.height}
            width={image.dimensions.width}
            src={image.url}
            alt={image.alt ?? 'Menu item'}
            className={cn('transition-opacity', {
              'opacity-100': !open,
              'opacity-0': open,
            })}
          />
        </div>
        <ul
          className={cn('grid gap-16 transition-all mt-5', {
            'hide-vertically text-cream': !open,
            'clip-path-0 text-green': open,
          })}
        >
          {submenu.map((item, key) => (
            <li key={key}>
              <SubmenuItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type Props = {
  menu: IMenu[]
}

const MobileFrontpage = ({ menu }: Props) => {
  return (
    <div className="block relative h-full lg:hidden px-4 mt-10">
      <div className="grid align-middle gap-5 mb-14 text-center h-full">
        {menu.map((item, key) => (
          <MenuItem {...item} key={key} />
        ))}
      </div>
      <div className="my-36">
        <ContactInfo />
      </div>
    </div>
  )
}

export default MobileFrontpage
