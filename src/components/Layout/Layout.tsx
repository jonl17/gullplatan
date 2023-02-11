import React, { useEffect } from 'react'
import { useBurgerMenu } from '~/store/burger-menu'
import BurgerMenu from '../BurgerMenu'
import Navbar from '../Navbar'
import Menu from '../Menu/Menu'
import { IMenu } from '~/types'
import { MenuDocument } from '~/prismic-types.generated'
import Alien from '../Alien/Alien'
import { AnimatePresence } from 'framer-motion'
import Burger from '../Burger/Burger'

type Props = {
  children: React.ReactNode
  pageProps: {
    menu: MenuDocument
    background?: string
  }
}

const Layout = ({ children, pageProps: { menu } }: Props) => {
  const { open, setOpen } = useBurgerMenu()

  console.log(menu)

  useEffect(() => {
    if (document) {
      const grainBgEl = document.getElementById('grain-bg')
      if (grainBgEl) {
        grainBgEl.style.backgroundImage = 'url(/grain.png)'
        grainBgEl.style.backgroundSize = 'contain'
      }
    }
  }, [])

  return (
    <>
      <main className="transition-all min-h-screen h-full relative">
        <div className="relative">{children}</div>
        <AnimatePresence>{open && <Menu {...menu.data} />}</AnimatePresence>
      </main>
      <Burger />
      <Alien />
    </>
  )
}

export default Layout
