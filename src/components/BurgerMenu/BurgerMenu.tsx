import { useState } from 'react'
import cn from 'classnames'
import { useBurgerMenu } from '~/store/burger-menu'
import Text from '../Text'
import Link from 'next/link'
import { useAudioStore } from '~/store/audio'

export default function BurgerMenu() {
  const { open, setOpen } = useBurgerMenu()
  const { setGlobalAudioState } = useAudioStore()

  return (
    <div
      className={cn(
        'min-h-screen bg-green-blue fixed w-full top-0 left-0 z-[99] overflow-hidden',
        {
          'w-full pointer-events-auto': open,
          'w-0 pointer-events-none': !open,
        }
      )}
    >
      <nav className="flex justify-between px-5 pt-10 text-cream">
        <Link href="/" passHref>
          <a
            onClick={() => {
              setOpen(false)
              setGlobalAudioState('paused')
            }}
          >
            <Text variant="logo" as="h1">
              Gullplatan
            </Text>
          </a>
        </Link>
        <button onClick={() => setOpen(false)}>
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3L28 23" stroke="#A13A71" strokeWidth="6" />
            <path d="M3 23L28 3" stroke="#A13A71" strokeWidth="2" />
          </svg>
        </button>
      </nav>
    </div>
  )
}
