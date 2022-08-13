import { createClient } from '@root/prismicio'
import React, { useState, useEffect, useRef } from 'react'
import { PauseButton, PlayButton } from '~/components/Icon'

type Props = {
  soundId: string
}

const AudioPlayer = ({ soundId }: Props) => {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [sound, setSound] = useState<any>()

  useEffect(() => {
    const client = createClient()
    const fetchData = async () => {
      const result = await client.getByID(soundId)
      setSound(result.data)
    }
    fetchData()
  }, [soundId])

  const clickHandler = () => {
    const audio = audioRef.current
    if (audio) {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        audio.play()
        setPlaying(true)
      }
    }
  }

  return (
    <>
      {sound && (
        <audio
          onEnded={() => setPlaying(false)}
          ref={audioRef}
          src={sound.file.url}
        />
      )}
      <button
        className="flex place-content-center pb-2 md:pt-2"
        onClick={clickHandler}
      >
        {playing ? (
          <PauseButton className="h-12 md:h-16" />
        ) : (
          <PlayButton className="h-12 md:h-16" />
        )}
      </button>
    </>
  )
}

export default AudioPlayer
