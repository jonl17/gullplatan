import { useEffect, useState } from 'react'
import cn from 'classnames'
import { useBurgerMenu } from '~/store/burger-menu'
import Text from '../Text'
import Link from 'next/link'
import { useAudioStore } from '~/store/audio'
import { IMenu } from '~/types'
import { serviceGlobalSettings } from '~/services'
import MenuButtonDropdown from '../MenuButtonDropdown'
import { motion, AnimatePresence } from 'framer-motion'

export default function BurgerMenu() {
  const { setOpen } = useBurgerMenu()
  const { setGlobalAudioState } = useAudioStore()
  const [menu, setMenu] = useState<IMenu[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { menu } = await serviceGlobalSettings()
      setMenu(menu)
    }
    fetchData()
  }, [])

  return (
    <div
      className={cn(
        'min-h-screen bg-green-blue fixed w-full lg:w-2/3 top-0 right-0 z-[99] overflow-y-auto'
      )}
    >
      <div className="flex justify-between px-5 pt-10 text-cream">
        <Link href="/" passHref>
          <a
            onClick={() => {
              setOpen(false)
              setGlobalAudioState('paused')
            }}
          >
            <Text variant="logo" as="h1">
              Gullplatan
            </Text>
          </a>
        </Link>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:pr-5 top-10"
          onClick={() => setOpen(false)}
        >
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3L28 23" stroke="#A13A71" strokeWidth="6" />
            <path d="M3 23L28 3" stroke="#A13A71" strokeWidth="2" />
          </svg>
        </motion.button>
      </div>
      <div className="mt-24 text-center grid gap-5 place-content-center h-full">
        {menu.map((item, key) => (
          <MenuButtonDropdown {...item} key={key} />
        ))}
      </div>
    </div>
  )
}
