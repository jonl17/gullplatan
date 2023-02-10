import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Alien() {
  const [mouse, setMouse] = useState({ x: 500, y: 500 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      const ex = e.x - 100
      const ey = e.y - 100

      const handleX = () => {
        if (ex < 50) return 50
        else if (ex > window.innerWidth - 150) return window.innerWidth - 200
        else return ex
      }

      const handleY = () => {
        if (ey < 50) return 50
        else if (ey > window.innerHeight - 150) return window.innerHeight - 200
        else return ey
      }

      const x = handleX()
      const y = handleY()

      setMouse({ x, y })
      setOpacity(1)
    }

    document.addEventListener('mousemove', callback)
    return () => document.removeEventListener('mousemove', callback)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: mouse.x, y: mouse.y, opacity }}
      transition={{ duration: 0.6, damping: 900 }}
      className="inline-block h-[100px] w-[100px] fixed top-0 left-0 pointer-events-none"
    >
      <Image alt="Geimverann" src="/alien.png" height={100} width={100} />
    </motion.div>
  )
}
