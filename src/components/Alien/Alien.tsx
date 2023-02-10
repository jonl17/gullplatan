import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Alien() {
  const [mouse, setMouse] = useState({ x: -100, y: 2000 })

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      setMouse({ x: e.x - 100, y: e.y + 100 })
    }

    document.addEventListener('mousemove', callback)
    return () => document.removeEventListener('mousemove', callback)
  }, [])

  return (
    <motion.div
      animate={{ x: mouse.x, y: mouse.y }}
      transition={{ duration: 0.6, bounce: 0.95 }}
      className="inline-block h-[150px] w-[150px] fixed top-0 left-0 pointer-events-none"
    >
      <Image alt="Geimverann" src="/alien.png" height={150} width={150} />
    </motion.div>
  )
}
