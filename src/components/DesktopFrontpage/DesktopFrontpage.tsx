import { motion } from 'framer-motion'
import Image from 'next/image'
import { ImageType, IMenu } from '~/types'
import MenuButtonDropdown from '../MenuButtonDropdown/MenuButtonDropdown'

type Props = {
  heroImages: Array<ImageType>
  menu: IMenu[]
}

const DesktopFrontpage = ({ heroImages, menu }: Props) => {
  return (
    <div className="relative top-0 w-full hidden lg:block">
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className='w-1/4 fixed left-0 top-28'>
        <Image
          objectFit="contain"
          layout="responsive"
          height={heroImages[0].dimensions.height}
          width={heroImages[0].dimensions.width}
          src={heroImages[0].url}
          alt={heroImages[0].alt ?? 'frontpage image'}
        />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className='w-1/4 fixed right-0 top-28'>
        <Image
          objectFit="contain"
          layout="responsive"
          height={heroImages[1].dimensions.height}
          width={heroImages[1].dimensions.width}
          src={heroImages[1].url}
          alt={heroImages[1].alt ?? 'frontpage image'}
        />
      </motion.div>
      <div className="text-center grid gap-2 place-content-center h-full">
        {menu.map((item, key) => (
          <MenuButtonDropdown {...item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default DesktopFrontpage
