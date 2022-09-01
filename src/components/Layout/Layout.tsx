import cn from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { useBurgerMenu } from '~/store/burger-menu'
import BurgerMenu from '../BurgerMenu'
import Navbar from '../Navbar'

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

  return (
    <main
      style={{ backgroundColor: findBackgroundColor() }}
      className={cn('grain transition-all min-h-screen', {
        'pt-16': asPath !== '/',
      })}
    >
      <Navbar seperator={asPath !== '/'} />
      {open && <BurgerMenu />}
      {children}
    </main>
  )
}

export default Layout
