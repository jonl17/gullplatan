import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { ImageType, IMenu } from '~/types'
import Text from '../Text'
// import ContactInfo from '../ContactInfo/ContactInfo'
// import MenuButtonDropdown from '../MenuButtonDropdown/MenuButtonDropdown'

type Props = {
  heroImages: Array<ImageType>
  menu: IMenu[]
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

const DesktopFrontpage = ({ heroImages, menu }: Props) => {
  const ref = useRef<null | HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  const leftY = useParallax(scrollYProgress, 100)
  const rightY = useParallax(scrollYProgress, 200)

  return (
    <div ref={ref} className="relative top-0 w-full hidden lg:block h-[3000px]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="w-[35vw] absolute left-10 top-40"
        style={{ y: leftY }}
      >
        <Image
          objectFit="contain"
          layout="responsive"
          height={heroImages[0].dimensions.height}
          width={heroImages[0].dimensions.width}
          src={heroImages[0].url}
          alt={heroImages[0].alt ?? 'frontpage image'}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="w-[50vw] absolute right-10 top-40"
        style={{ y: rightY }}
      >
        <Image
          objectFit="contain"
          layout="responsive"
          height={heroImages[1].dimensions.height}
          width={heroImages[1].dimensions.width}
          src={heroImages[1].url}
          alt={heroImages[1].alt ?? 'frontpage image'}
        />
      </motion.div>
      <div className="absolute top-0 left-0 h-screen w-full grid place-content-center">
        <Text
          className="text-41/49.2 text-cream z-10"
          as="h1"
          variant="heading1"
        >
          Gullplatan
        </Text>
      </div>
      <Image src="/alien.png" alt="alient" height={150} width={150} />
      {/* <div className="text-center grid gap-2 justify-center h-full mb-16 md:mb-36">
        {menu.map((item, key) => (
          <MenuButtonDropdown {...item} key={key} />
        ))}
      </div> */}
      {/* <ContactInfo /> */}
    </div>
  )
}

export default DesktopFrontpage
