import cn from 'classnames'
import React, { useEffect, useState } from 'react'
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
      className="relative px-6 md:px-24 py-5 rounded-[18px] md:rounded-[53px]"
      ref={ref}
    >
      {children}

      <span
        className={cn(
          'pointer-events-none absolute top-0 left-0 h-full w-full border-[6px] md:border-[10px] border-transparent transition-all rounded-[18px] md:rounded-[53px] box-clip-top-center',
          {
            'animate-border-appear-top-left': discovered,
          }
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute top-0 left-0  border-[6px] md:border-[10px] w-full h-full border-green-blue transition-all rounded-[18px] md:rounded-[53px] box-clip-top-center',
          {
            'animate-border-appear-top-right': discovered,
          }
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute top-0 left-0 border-[6px] md:border-[10px] w-full h-full border-green-blue transition-all rounded-[18px] md:rounded-[53px] box-clip-sides',
          {
            'animate-border-appear-sides': discovered,
          }
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute bottom-0 left-0 border-[6px] md:border-[10px] w-full h-full border-green-blue transition-all rounded-[18px] md:rounded-[53px] box-clip-bottom-right',
          {
            'animate-border-appear-bottom-right': discovered,
          }
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute bottom-0 right-0 h-full w-full border-[6px] md:border-[10px] border-transparent transition-all rounded-[18px] md:rounded-[53px] box-clip-bottom-left',
          {
            'animate-border-appear-bottom-left': discovered,
          }
        )}
      />
      {connector && (
        <span
          className={cn(
            'hidden md:block w-[6px] md:w-[10px] h-6 md:h-12 absolute -bottom-5 md:-bottom-12 left-1/2 -ml-[3px] md:-ml-[5px]'
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
