import { useEffect, useRef } from 'react'

type Props = {
  audioFile: string
  play: boolean
}

const Audio = ({ audioFile, play }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const shouldPlay = play && audioFile

  useEffect(() => {
    if (audioRef.current) {
      if (shouldPlay) audioRef.current.play()
      else audioRef.current.pause()
    }
  }, [shouldPlay])

  return (
    <audio ref={audioRef}>
      <source src={audioFile}></source>
    </audio>
  )
}

export default Audio
