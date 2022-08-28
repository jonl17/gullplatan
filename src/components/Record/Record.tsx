import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { useAudioStore } from "~/store/audio";
import { ImageType } from "~/types";

type Props = {
  logo: ImageType
}

export default function Record({ logo }: Props) {
  const { globalAudioState, setGlobalAudioState } = useAudioStore()
  const [spin, setSpin] = useState(0)

  const { asPath } = useRouter()

  const controls = useAnimation()

  useEffect(() => {
    if (globalAudioState === 'playing') {
      let intervalId = setInterval(() => {
        setSpin(prev => prev + 5)

      }, 100)
      return () => clearInterval(intervalId)
    }

  }, [globalAudioState])

  useEffect(() => {
    if (asPath !== '/') {
      controls.start({
        top: '3.5rem'
      })
    } else {
      controls.start({
        top: '5rem'
      })
    }
  }, [asPath, controls])

  return (
    <Link passHref href='/'>
      <motion.a onClick={() => setGlobalAudioState('paused')} initial={{ top: '2.5rem' }} animate={controls} className="sticky left-5 z-50">
        <Image className="transition-transform" style={{ transform: `rotate(${spin}deg)` }} height={logo.dimensions.height} width={logo.dimensions.width} layout='fixed' alt='Gullplatan' src={logo.url} />
      </motion.a>
    </Link>
  )
}