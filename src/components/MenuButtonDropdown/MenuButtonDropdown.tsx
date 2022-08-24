import React, { useState } from 'react'
import { IMenu } from '~/types'
import Text from '../Text'
import cn from 'classnames'
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
      <Text variant="pageHeading">{label}</Text>
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
