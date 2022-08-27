import { motion } from 'framer-motion'
import Link from 'next/link'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'

type Props = {
  seperator?: boolean
}

const Navbar = ({ seperator = true }: Props) => {
  return (
    <nav className="h-[100px] md:h-[200px] text-cream relative">
      <div className="container flex h-full justify-between relative">
        <Link href="/" passHref>
          <motion.a initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex place-items-center">
            <Text className="mb-5 md:mb-10" variant="logo" as="h1">
              gullplatan
            </Text>
          </motion.a>
        </Link>
      </div>
      {seperator && <Seperator double />}
    </nav>
  )
}

export default Navbar
