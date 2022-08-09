import { ISoundsSlice } from '@root/slices/SoundsSlice'
import React from 'react'
import RichText from '~/components/RichText'
import { FieldRenderFunctionInput, FieldRenderMap } from '../RichText/types'
import Text from '~/components/Text'
import { Elements, RichTextBlock } from 'prismic-reactjs'

const renderPrismicParagraph = ({
  key,
  children,
}: FieldRenderFunctionInput) => (
  <Text variant="paragraph1" className="my-4 pb-3" key={key}>
    {children}
  </Text>
)

const fieldMapOverwrite: FieldRenderMap = {
  [Elements.paragraph]: renderPrismicParagraph,
}

type SingleSoundProps = {
  sound: {
    url: string
  }
  description: RichTextBlock[]
}

const SingleSound = ({ sound, description }: SingleSoundProps) => {
  return (
    <div className="px-12 md:px-24 py-5 border-[6px] md:border-[10px] border-green-blue rounded-[18px] md:rounded-[53px]">
      <div className="pr-12 md:pr-24">
        <RichText fieldMapOverwrite={fieldMapOverwrite} data={description} />
      </div>
    </div>
  )
}

const MultipleSounds = ({ slice }: ISoundsSlice) => {
  console.log(slice)
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container max-w-6xl mx-auto text-cream">
        <div className="md:w-1/2">
          <RichText data={slice.primary.description} />
        </div>
        <div className="grid gap-10">
          {slice.items &&
            slice.items.map((item, key) => (
              <SingleSound
                key={key}
                sound={item.sound}
                description={item.description_of_sound}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default MultipleSounds
