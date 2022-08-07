import Link from 'next/link'
import React from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'

const Navbar = () => {
  return (
    <nav className="h-[130px] md:h-[300px] text-cream relative">
      <div className="container flex h-full justify-between">
        <Link href="/" passHref>
          <a className="flex place-items-center">
            <Text variant="navbar" as="h1">
              Gullplatan
            </Text>
          </a>
        </Link>
        <div>menu here</div>
      </div>
      <Seperator double />
    </nav>
  )
}

export default Navbar
