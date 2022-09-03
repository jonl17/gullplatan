import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useBurgerMenu } from '~/store/burger-menu'
import BurgerMenu from '../BurgerMenu'
import Navbar from '../Navbar'
import Head from 'next/head'
import Image from 'next/image'
import grainImage from '../../../public/grain.png'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { asPath, query } = useRouter()
  const { open } = useBurgerMenu()

  const findBackgroundColor = useCallback(() => {
    if (asPath === '/') {
      return '#41B3A3'
    } else if (query.uid === 'leiðangur-23') {
      return '#A13A71'
    } else if (query.uid === 'leiðangur-77') {
      return '#5E364A'
    } else return '#41B3A3'
  }, [asPath, query])

  useEffect(() => {
    if (document) {
      document.body.style.background = findBackgroundColor()
      const grainBgEl = document.getElementById('grain-bg')
      if (grainBgEl) {
        grainBgEl.style.backgroundImage = 'url(/grain.png)'
        grainBgEl.style.backgroundSize = 'contain'
      }
    }
  }, [findBackgroundColor])

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <main className={cn('transition-all min-h-screen h-full relative')}>
        <div
          id="grain-bg"
          className="fixed top-0 left-0 opacity-50 h-screen w-screen"
        />
        <Navbar seperator={asPath !== '/'} />
        {open && <BurgerMenu />}
        <div className="relative">{children}</div>
      </main>
    </>
  )
}

export default Layout
