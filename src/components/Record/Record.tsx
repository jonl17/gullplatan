import Image from "next/image";
import { useEffect, useState } from 'react';
import { useAudioStore } from "~/store/audio";
import { ImageType } from "~/types";

type Props = {
  logo: ImageType
}

export default function Record({ logo }: Props) {
  const { globalAudioState } = useAudioStore()
  const [spin, setSpin] = useState(0)

  useEffect(() => {
    if (globalAudioState === 'playing') {
      let intervalId = setInterval(() => {
        setSpin(prev => prev + 5)

      }, 100)
      return () => clearInterval(intervalId)
    }

  }, [globalAudioState])

  return (
    <Image className="transition-transform" style={{ transform: `rotate(${spin}deg)` }} height={logo.dimensions.height} width={logo.dimensions.width} layout='fixed' alt='Gullplatan' src={logo.url} />
  )
}