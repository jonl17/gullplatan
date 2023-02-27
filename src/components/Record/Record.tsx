import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAudioStore } from '~/store/audio'

export default function Record() {
  const { globalAudioState, setGlobalAudioState } = useAudioStore()
  const [spin, setSpin] = useState(0)

  useEffect(() => {
    if (globalAudioState === 'playing') {
      let intervalId = setInterval(() => {
        setSpin((prev) => prev + 5)
      }, 75)
      return () => clearInterval(intervalId)
    }
  }, [globalAudioState])

  return (
    <button
      aria-label="Stop the audio playing"
      onClick={() => setGlobalAudioState('paused')}
      className="sticky left-5 top-5 z-40"
    >
      <motion.div
        style={{ transform: `rotate(${spin}deg)`, height: 57, width: 57 }}
      >
        <Image src="/record.png" alt="Record image" height={57} width={57} />
      </motion.div>
    </button>
  )
}
