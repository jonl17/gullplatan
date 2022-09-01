import { useEffect, useLayoutEffect } from 'react'

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = 'auto')
  }, []) // Empty array ensures effect is only run on mount and unmount
}
