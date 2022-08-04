import Link from 'next/link'
import React from 'react'
import Seperator from '~/components/Seperator'

const Navbar = () => {
  return (
    <nav className="h-[130px] md:h-[300px] text-cream relative">
      <div className="container flex h-full justify-between">
        <Link href="/" passHref>
          <a className="flex place-items-center">
            <h1 className="text-[40px] h-auto">Gullplatan</h1>
          </a>
        </Link>
        <div>menu here</div>
      </div>
      <Seperator double />
    </nav>
  )
}

export default Navbar
