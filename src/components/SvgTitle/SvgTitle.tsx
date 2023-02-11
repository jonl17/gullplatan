import Image from 'next/image'
import { ImageType } from '~/types'
import cn from 'classnames'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  image: ImageType
  className?: string
}

export default function SvgTitle({ image, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={cn(className)}>
      <span>
        <Image
          objectFit="contain"
          className={cn('w-full', {
            'animate-print': inView,
          })}
          src={image.url}
          alt={image.alt}
          height={image.dimensions.height}
          width={image.dimensions.width}
          layout="responsive"
        />
      </span>
    </div>
  )
}
