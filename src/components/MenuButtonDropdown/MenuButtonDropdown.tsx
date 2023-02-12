import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IMenu } from '~/types'
import SubmenuItem from '../SubmenuItem'
import SvgTitle from '../SvgTitle'
import Text from '../Text/Text'

const MenuButtonDropdown = ({ label, submenu, svgImage }: IMenu) => {
  const [open, setOpen] = useState(false)
  return (
    <button
      aria-label="Close dropdown menu"
      onClick={() => setOpen(!open)}
      className={cn('overflow-hidden transition-colors', {
        'text-cream hover:text-green': !open,
        'text-green': open,
      })}
    >
      <>
        <Text className="text-60/72">{label}</Text>

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
      </>
    </button>
  )
}

export default MenuButtonDropdown
