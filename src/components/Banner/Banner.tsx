import { Arrow } from '../Icon'
import Text from '../Text'
import Seperator from '../Seperator'
import { ImageType } from '~/types'
import SvgTitle from '../SvgTitle'

type Props = {
  svgTitle: ImageType
  video: {
    url: string
  }
}

export default function Banner({ svgTitle, video }: Props) {
  console.log({ video })
  return (
    <section className="min-h-screen relative bg-green-blue grid place-content-center">
      <span className="grain bg-contain min-h-screen fixed top-0 left-0 w-full opacity-75" />
      <div className="max-w-4xl mx-auto relative text-center  py-10">
        <SvgTitle
          className="w-2/3 md:w-full max-w-[650px] mx-auto"
          image={svgTitle}
        />
        <Text variant="paragraph1" className="text-deep-purple">
          Sendum tónlist útí geim!
        </Text>
        <div className="relative  py-10 w-full">
          <video
            className="md:rounded-[29px] h-auto md:h-[35vh] xl:h-[45vh] mx-auto w-full md:w-auto aspect-video"
            autoPlay
            muted
            loop
          >
            <source src={video.url}></source>
          </video>
        </div>
        <button className="mx-auto max-w-lg text-center block">
          <Text variant="heading2" className="text-green mb-5">
            Hefja leiðangur
          </Text>
          <Arrow className="text-green w-32" />
        </button>
      </div>
      <Seperator className="-bottom-[14px] md:-bottom-[39px]" double />
    </section>
  )
}
