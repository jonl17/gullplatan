import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { useInView } from 'react-intersection-observer'

type Props = {
  children?: React.ReactNode
  connector?: boolean
}

const BorderBox = ({ children, connector = false }: Props) => {
  const [discovered, setDiscovered] = useState(false)

  const { inView, ref } = useInView({
    threshold: 1,
  })

  useEffect(() => {
    if (inView) {
      setDiscovered(true)
    }
  }, [inView])

  return (
    <div
      className="relative px-12 md:px-24 py-5 rounded-[18px] md:rounded-[53px]"
      ref={ref}
    >
      {children}

      <span
        className={cn(
          'pointer-events-none absolute top-0 left-0 h-full border-[6px] md:border-[10px] border-transparent transition-all rounded-[18px] md:rounded-[53px]',
          {
            'animate-border-appear-first': discovered,
          }
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute top-0 left-0 h-full border-[6px] md:border-[10px] border-transparent transition-all rounded-[18px] md:rounded-[53px]',
          {
            'animate-border-appear-second': discovered,
          }
        )}
      />
      {connector && (
        <span
          className={cn(
            'w-[6px] md:w-[10px] h-6 md:h-12 absolute -bottom-5 md:-bottom-12 left-1/2 -ml-[3px] md:-ml-[5px]'
          )}
        >
          <span
            className={cn('w-full bg-green-blue absolute', {
              'animate-connector-grow': discovered,
            })}
          />
        </span>
      )}
    </div>
  )
}

export default BorderBox
