import { ImageType, Video } from '~/types'
import { Arrow } from '../Icon'
import Text from '../Text'
import Link from 'next/link'

type Props = {
  svgTitle: ImageType
  // alpha video has backup for browser compatibility
  video: [Video, Video]
}

export default function Banner({ svgTitle, video }: Props) {
  return (
    <section className="min-h-screen relative bg-green-blue grain grid place-content-center">
      <div className="max-w-4xl mx-auto relative text-center py-10">
        <div className="relative  py-10 w-full">
          <video
            className="md:rounded-[29px] h-auto md:h-[35vh] xl:h-[42vh] mx-auto w-full md:w-auto aspect-video"
            autoPlay
            muted
            loop
          >
            {video.map((v, i) => (
              <source type={v.type} src={v.url} key={i} />
            ))}
          </video>
        </div>
        <div className="mx-auto max-w-lg text-center block">
          <Text variant="heading2" className="text-green mb-5">
            Hefja leiðangur
          </Text>
          <Arrow className="text-green w-32" />
        </div>
      </div>
    </section>
  )
}
