import React from 'react'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import { useRouter } from 'next/router'
import cn from 'classnames'

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
      className="grain min-h-screen transition-colors"
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
