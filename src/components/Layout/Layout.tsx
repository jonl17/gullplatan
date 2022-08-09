import React from 'react'
import Navbar from '~/components/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="bg-deep-purple min-h-screen">
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
