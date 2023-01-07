import React, { useEffect } from 'react'
import { useBurgerMenu } from '~/store/burger-menu'
import BurgerMenu from '../BurgerMenu'
import Navbar from '../Navbar'

type Props = {
  children: React.ReactNode
  pageProps: {
    background?: string
  }
}

const Layout = ({ children, pageProps: { background = '#41B3A3' } }: Props) => {
  const { open } = useBurgerMenu()

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
      <main
        style={{ background }}
        className="transition-all min-h-screen h-full relative"
      >
        <div
          id="grain-bg"
          className="fixed top-0 left-0 opacity-50 h-screen w-screen"
        />
        <Navbar />
        {open && <BurgerMenu />}
        <div className="relative">{children}</div>
      </main>
    </>
  )
}

export default Layout
