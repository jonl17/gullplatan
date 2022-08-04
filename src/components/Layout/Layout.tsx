import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <main className="bg-purple">{children}</main>
}

export default Layout
