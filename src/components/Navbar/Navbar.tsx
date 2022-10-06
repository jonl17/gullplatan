import { createClient } from '@root/prismicio'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Text from '~/components/Text'
import { useAudioStore } from '~/store/audio'
import { ImageType } from '~/types'
import StickyNavbar from '../StickyNavbar/StickyNavbar'

type Props = {
  seperator?: boolean
}

const Navbar = () => {
  const { setGlobalAudioState } = useAudioStore()

  return (
    <>
      <StickyNavbar />

      <motion.nav className="text-cream absolute top-0 z-50 left-0 h-36">
        <div className="flex h-full justify-between relative w-full">
          <Link href="/" passHref>
            <motion.a
              onClick={() => setGlobalAudioState('paused')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-[auto,1fr] gap-10 justify-start place-items-center"
            >
              <span className="w-14 h-14" />
              <Text variant="logo" as="h1">
                gullplatan
              </Text>
            </motion.a>
          </Link>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
