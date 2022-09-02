import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useBurgerMenu } from '~/store/burger-menu'
import BurgerMenu from '../BurgerMenu'
import Navbar from '../Navbar'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { asPath, query } = useRouter()
  const { open } = useBurgerMenu()

  const findBackgroundColor = () => {
    if (asPath === '/') {
      return '#41B3A3'
    } else if (query.uid === 'leiðangur-23') {
      return '#A13A71'
    } else if (query.uid === 'leiðangur-77') {
      return '#5E364A'
    } else return '#41B3A3'
  }

  useEffect(() => {
    if (document) {
      document.body.style.background = findBackgroundColor()
      document.body.className = 'grain'
    }
  }, [findBackgroundColor])

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <main className={cn('grain transition-all min-h-screen h-full')}>
        <Navbar seperator={asPath !== '/'} />
        {open && <BurgerMenu />}
        {children}
      </main>
    </>
  )
}

export default Layout
