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
import ContactInfo from '../ContactInfo/ContactInfo'

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
    <div className="flex fixed top-0 right-0 w-full h-full z-[99] min-h-screen">
      <button
        aria-label="Close the mobile menu"
        onClick={() => setOpen(false)}
        className="w-full bg-transparent h-full hidden lg:block"
      ></button>
      <div className="grid bg-green-blue content-start w-full h-full overflow-y-auto mb-12">
        <div className="flex justify-between h-36 items-baseline px-5 pt-10 text-cream">
          <Link href="/" passHref>
            <a
              aria-label="Go to frontpage"
              onClick={() => {
                setOpen(false)
                setGlobalAudioState('paused')
              }}
            >
              <span className="hidden lg:block" />
              <Text className="block lg:hidden" variant="logo" as="h1">
                Gullplatan
              </Text>
            </a>
          </Link>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:pr-5 pt-5"
            onClick={() => setOpen(false)}
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.4 }}
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
        <div className="text-center grid gap-5 place-content-center h-full mb-24">
          {menu.map((item, key) => (
            <MenuButtonDropdown {...item} key={key} />
          ))}
        </div>
        <ContactInfo />
      </div>
    </div>
  )
}
