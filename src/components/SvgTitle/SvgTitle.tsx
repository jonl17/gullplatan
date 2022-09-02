import Image from 'next/image'
import { ImageType } from '~/types'
import cn from 'classnames'

type Props = {
  image: ImageType
  className?: string
}

export default function SvgTitle({ image, className }: Props) {
  return (
    <div className={cn(className)}>
      <Image
        objectFit="contain"
        className="w-full"
        src={image.url}
        alt={image.alt}
        height={image.dimensions.height}
        width={image.dimensions.width}
        layout="responsive"
      />
    </div>
  )
}
