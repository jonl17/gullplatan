import { createClient } from '@root/prismicio'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Text from '~/components/Text'
import { useAudioStore } from '~/store/audio'
import { ImageType } from '~/types'
import Record from '../Record/Record'

type Props = {
  seperator?: boolean
}

const Navbar = ({ seperator = true }: Props) => {
  const controls = useAnimation()
  const { asPath } = useRouter()
  const [logo, setLogo] = useState<ImageType>()
  const { setGlobalAudioState } = useAudioStore()

  useEffect(() => {
    if (asPath !== '/') {
      controls.start({
        height: '12rem'
      })
    } else {
      controls.start({
        height: '9rem'
      })
    }
  }, [asPath, controls])

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient()
      await client.getSingle('global_settings').then(result => setLogo(result.data.logo))
    }
    fetchData()
  }, [])


  return (
    <>
      <motion.nav animate={controls} className="h-16 md:h-36 text-cream sticky -top-14 z-50">
        <div className="container flex h-full justify-between relative">
          <Link href="/" passHref>
            <motion.a onClick={() => setGlobalAudioState('paused')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="grid grid-cols-[auto,1fr] gap-5 justify-start place-items-center">
              {logo && <Record logo={logo} />}
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
