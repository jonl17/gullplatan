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
          'pointer-events-none absolute top-0 left-0 h-full border-[10px] border-transparent transition-all rounded-[18px] md:rounded-[53px]',
          {
            'animate-border-appear-first': discovered,
          }
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute top-0 left-0 h-full border-[10px] border-transparent transition-all rounded-[18px] md:rounded-[53px]',
          {
            'animate-border-appear-second': discovered,
          }
        )}
      />
      {connector && (
        <span
          className={cn(
            'md:w-[10px] bg-green-blue absolute -bottom-12 left-1/2 -ml-[5px]',
            {
              'animate-connector-grow': discovered,
            }
          )}
        />
      )}
    </div>
  )
}

export default BorderBox
