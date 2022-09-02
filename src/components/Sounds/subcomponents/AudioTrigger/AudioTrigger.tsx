import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PauseButton, PlayButton } from '~/components/Icon'
import { AudioState, useAudioStore } from '~/store/audio'

type Props = {
  audioFile: string
}

const AudioTrigger = ({ audioFile }: Props) => {
  const {
    globalAudioState,
    setGlobalAudioState,
    setCurrentAudioFile,
    currentAudioFile,
  } = useAudioStore()

  const [localAudioState, setLocalAudioState] = useState<AudioState>('paused')

  useEffect(() => {
    if (globalAudioState === 'playing' && currentAudioFile !== audioFile) {
      setLocalAudioState('paused')
    }
  }, [currentAudioFile, globalAudioState, audioFile])

  if (localAudioState === 'paused') {
    return (
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="md:flex md:place-content-center pb-2 md:pt-2"
        onClick={() => {
          setLocalAudioState('playing')
          setGlobalAudioState('playing')
          setCurrentAudioFile(audioFile)
        }}
      >
        <PlayButton className="h-12 md:h-16" />
      </motion.button>
    )
  }

  // if playing
  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="md:flex md:place-content-center pb-2 md:pt-2"
        onClick={() => {
          setLocalAudioState('paused')
          if (currentAudioFile === audioFile) {
            setGlobalAudioState('paused')
          }
        }}
      >
        {currentAudioFile && (
          <audio
            onEnded={() => {
              setGlobalAudioState('paused')
              setLocalAudioState('paused')
            }}
            autoPlay
          >
            <source src={currentAudioFile} />
          </audio>
        )}
        <PauseButton className="h-12 md:h-16" />
      </motion.button>
    </>
  )
}

export default AudioTrigger
