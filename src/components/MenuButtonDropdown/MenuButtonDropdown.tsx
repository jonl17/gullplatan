import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IMenu } from '~/types'
import SubmenuItem from '../SubmenuItem'

const MenuButtonDropdown = ({ label, submenu }: IMenu) => {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn('overflow-hidden transition-colors', {
        'text-cream hover:text-green': !open,
        'text-green': open,
      })}
    >
      <motion.h1 variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
        }
      }} initial="hidden" animate="show" className='font-buenos-black font-black lowercase text-41/49.2 md:text-120/151.2'>{label.split("").map((char, key) => (
        <motion.span variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 }
        }} key={key}>
          {char}
        </motion.span>
      ))}</motion.h1>
      <ul
        className={cn('grid gap-3 transition-all', {
          'hide-vertically text-cream': !open,
          'clip-path-0 text-green': open,
        })}
      >
        {submenu.map((item, key) => (
          <SubmenuItem {...item} key={key} />
        ))}
      </ul>
    </button>
  )
}

export default MenuButtonDropdown
