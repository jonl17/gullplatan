import Link from 'next/link'
import React from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'

type Props = {
  seperator?: boolean
}

const Navbar = ({ seperator = true }: Props) => {
  return (
    <nav className="h-[100px] md:h-[200px] text-cream relative">
      <div className="container flex h-full justify-between relative">
        <Link href="/" passHref>
          <a className="flex place-items-center">
            <Text className="mb-5 md:mb-10" variant="logo" as="h1">
              gullplatan
            </Text>
          </a>
        </Link>
      </div>
      {seperator && <Seperator double />}
    </nav>
  )
}

export default Navbar
