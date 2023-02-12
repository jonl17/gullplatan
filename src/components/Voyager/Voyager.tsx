import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Voyager() {
  return (
    <motion.span
      initial={{ x: -50, y: -50, opacity: 0, rotate: 0 }}
      animate={{
        x: '100vw',
        y: '400vh',
        opacity: 1,
        rotate: 16,
      }}
      transition={{ duration: 200, ease: 'linear', opacity: { duration: 0.4 } }}
      className="absolute top-5 left-5 md:left-10 block z-50 pointer-events-none"
    >
      <Image
        objectFit="contain"
        height={200}
        width={200}
        src="/voyager.png"
        alt="Voyager geimfar"
      />
    </motion.span>
  )
}
