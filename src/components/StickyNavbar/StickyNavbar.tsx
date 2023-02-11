import { motion, useAnimation } from 'framer-motion'
import Record from '../Record'

export default function StickyNavbar() {
  const controls = useAnimation()

  return (
    <motion.nav
      initial={{ top: '2.5rem' }}
      animate={controls}
      className="sticky z-40 w-full flex justify-between"
    >
      <Record />
    </motion.nav>
  )
}
