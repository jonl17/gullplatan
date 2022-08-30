import React, { useState } from 'react'
import { MenuItemType } from '~/types'
import Text from '../Text'
import cn from 'classnames'
import Link from 'next/link'

const SubmenuItem = ({ label, url }: MenuItemType) => {
  const [hovered, setHovered] = useState(false)

  if (url) {
    return (
      <Link passHref href={url}>
        <a
          className="relative inline-block"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Text className="mb-1" variant="heading3">
            {label}
          </Text>
          <span
            className={cn(
              'absolute left-0 bottom-0 h-1 w-full bg-green transition-all',
              {
                'w-full': hovered,
                'w-0': !hovered,
              }
            )}
          />
        </a>
      </Link>
    )
  }

  return (
    <div className="inline-flex">
      <Text variant="heading3">{label}</Text>
      <Text className="ml-2" variant="paragraph2">
        {'(væntanlegt)'}
      </Text>
    </div>
  )
}

export default SubmenuItem
