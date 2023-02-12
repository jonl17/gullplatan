import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactElement
}

const OFFSET = 150

export default function Alien({ children }: Props) {
  const [mouse, setMouse] = useState({ x: 500, y: 500 })

  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      const ex = e.x - OFFSET
      const ey = e.y - OFFSET

      const handleX = () => {
        if (ex < 50) return 50
        else if (ex > window.innerWidth - OFFSET) return window.innerWidth - 200
        else return ex
      }

      const handleY = () => {
        if (ey < 50) return 50
        else if (ey > window.innerHeight - OFFSET)
          return window.innerHeight - 200
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
      transition={{ duration: 0.8, mass: 0.5, type: 'spring' }}
      className="z-50 hidden lg:inline-block h-[100px] w-[100px] fixed top-0 left-0 pointer-events-none"
    >
      {children}
    </motion.div>
  )
}
