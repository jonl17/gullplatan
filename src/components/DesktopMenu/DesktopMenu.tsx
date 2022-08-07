import React from 'react'
import Text from '~/components/Text'

const DesktopMenu = () => {
  return (
    <div className="gap-3 h-[85px] absolute bottom-0 right-0 hidden md:flex">
      <Text variant="heading3">Menu item</Text>
      <Text className="uppercase" variant="paragraph2">
        Menu item
      </Text>
      <Text variant="heading3">Menu item</Text>
    </div>
  )
}

export default DesktopMenu
