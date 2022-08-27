import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'

type Props = {
  seperator?: boolean
}

const Navbar = ({ seperator = true }: Props) => {
  const controls = useAnimation()
  const { asPath } = useRouter()

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

  return (
    <motion.nav animate={controls} className="h-16 md:h-36 text-cream relative">
      <div className="container flex h-full justify-between relative">
        <Link href="/" passHref>
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex place-items-center">
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
