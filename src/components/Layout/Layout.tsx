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

const Layout = ({ children, pageProps: { background = '#5E364A' } }: Props) => {
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
      <main className="transition-all min-h-screen h-full relative">
        {/* <span
          style={{ background }}
          className="fixed top-0 left-0 opacity-100 h-screen w-screen"
        />
        <div
          id="grain-bg"
          className="fixed top-0 left-0 opacity-50 h-screen w-screen"
        /> */}
        {/* <Navbar /> */}
        {open && <BurgerMenu />}
        <div className="relative">{children}</div>
      </main>
    </>
  )
}

export default Layout
