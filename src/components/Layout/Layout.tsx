import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { asPath, query } = useRouter()

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
      className="grain transition-colors"
    >
      <Navbar seperator={asPath !== '/'} />
      {children}
    </main>
  )
}

export default Layout
