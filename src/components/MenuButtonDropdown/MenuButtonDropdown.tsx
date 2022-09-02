import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IMenu } from '~/types'
import SubmenuItem from '../SubmenuItem'
import SvgTitle from '../SvgTitle'

const MenuButtonDropdown = ({ label, submenu, svgImage }: IMenu) => {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn('overflow-hidden transition-colors', {
        'text-cream hover:text-green': !open,
        'text-green': open,
      })}
    >
      {svgImage.url ? (
        <SvgTitle className="w-[300px] md:w-[450px]" image={svgImage} />
      ) : (
        <motion.h1
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="show"
          className="font-buenos-black font-black lowercase text-41/49.2 md:text-8vw/1 mb-5"
        >
          {label}
        </motion.h1>
      )}
      <ul
        className={cn('grid gap-3 transition-all', {
          'hide-vertically text-cream': !open,
          'clip-path-0 text-green': open,
        })}
      >
        {submenu.map((item, key) => (
          <li key={key}>
            <SubmenuItem {...item} />
          </li>
        ))}
      </ul>
    </button>
  )
}

export default MenuButtonDropdown
