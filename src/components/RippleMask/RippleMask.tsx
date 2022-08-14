import React from 'react'
import cn from 'classnames'

type Props = {
  className?: string
}

const RippleMask = ({ className = 'bg-current' }: Props) => {
  return (
    <span className="absolute top-0 left-0 h-full w-full inline-flex justify-between pointer-events-none">
      {Array.from(Array(45)).map((_, idx) => (
        <span
          className={cn('w-[1px] h-full hidden md:block', className)}
          key={idx}
        />
      ))}
      {Array.from(Array(25)).map((_, idx) => (
        <span
          className={cn('w-[1px] h-full block md:hidden', className)}
          key={idx}
        />
      ))}
    </span>
  )
}

export default RippleMask
