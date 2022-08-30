import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Burger from '../Burger'
import Record from '../Record'

export default function StickyNavbar() {
  const { asPath } = useRouter()
  const controls = useAnimation()

  useEffect(() => {
    if (asPath !== '/') {
      controls.start({
        top: '1.5rem',
      })
    } else {
      controls.start({
        top: '2.5rem',
      })
    }
  }, [asPath, controls])
  return (
    <motion.nav
      initial={{ top: '2.5rem' }}
      animate={controls}
      className="sticky w-full flex justify-between z-50"
    >
      <Record />
      {asPath !== '/' && <Burger />}
    </motion.nav>
  )
}
