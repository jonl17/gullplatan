import React, { useEffect, useState } from 'react'
import Navbar from '~/components/Navbar'
import { IMenuItem } from '~/types'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [items, setItems] = useState<IMenuItem[]>([])

  return (
    <main className="bg-deep-purple">
      <Navbar items={items} />
      {children}
    </main>
  )
}

export default Layout
