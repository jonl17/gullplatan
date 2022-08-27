import { createClient } from '@root/prismicio'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import { ImageType } from '~/types'

type Props = {
  seperator?: boolean
}

const Navbar = ({ seperator = true }: Props) => {
  const controls = useAnimation()
  const { asPath } = useRouter()
  const [logo, setLogo] = useState<ImageType>()

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
    <motion.nav animate={controls} className="h-16 md:h-36 text-cream relative">
      <div className="container flex h-full justify-between relative">
        <Link href="/" passHref>
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="grid grid-cols-[auto,1fr] gap-5 justify-start place-items-center">
            {logo && <Image height={logo.dimensions.height} width={logo.dimensions.width} layout='fixed' alt='Gullplatan' src={logo.url} />}
            <Text variant="logo" as="h1">
              gullplatan
            </Text>
          </motion.a>
        </Link>
      </div>
      {seperator && <Seperator double />}
    </motion.nav>
  )
}

export default Navbar
