import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Burger from '../Burger'
import Record from '../Record'

export default function StickyNavbar() {
  const { asPath } = useRouter()
  const controls = useAnimation()

  return (
    <motion.nav
      initial={{ top: '2.5rem' }}
      animate={controls}
      className="fixed z-40 w-full flex justify-between"
    >
      <Record />
      {asPath !== '/' && <Burger />}
    </motion.nav>
  )
}
