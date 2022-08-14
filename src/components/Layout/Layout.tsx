import React from 'react'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="bg-purple min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
