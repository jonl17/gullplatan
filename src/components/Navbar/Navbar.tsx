import Link from 'next/link'
import React from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import { IMenuItem } from '~/types'
import DesktopMenu from '../DesktopMenu'

const Navbar = () => {
  return (
    <nav className="h-[130px] md:h-[300px] text-cream relative">
      <div className="container flex h-full justify-between relative">
        <Link href="/" passHref>
          <a className="flex place-items-center">
            <Text variant="logo" as="h1">
              gullplatan
            </Text>
          </a>
        </Link>
        <DesktopMenu />
      </div>
      <Seperator double />
    </nav>
  )
}

export default Navbar
