import { ISoundsSlice } from '@root/slices/Sounds'
import React from 'react'
import RichText from '~/components/RichText'
import { FieldRenderFunctionInput, FieldRenderMap } from '../RichText/types'
import Text from '~/components/Text'
import { Elements, RichTextBlock } from 'prismic-reactjs'
import AudioPlayer from './subcomponents/AudioPlayer'
import Seperator from '~/components/Seperator'
import BorderBox from '~/components/BorderBox'

const renderPrismicParagraph = ({
  key,
  children,
}: FieldRenderFunctionInput) => (
  <Text variant="paragraph2" className="mb-2" key={key}>
    {children}
  </Text>
)

const fieldMapOverwrite: FieldRenderMap = {
  [Elements.paragraph]: renderPrismicParagraph,
}

type SingleSoundProps = {
  sound: any
  description: RichTextBlock[]
}

const SingleSound = ({ sound, description }: SingleSoundProps) => {
  return (
    <div className="md:flex flex-col md:flex-row text-center md:text-left md:justify-between gap-10">
      <div>
        <RichText fieldMapOverwrite={fieldMapOverwrite} data={description} />
      </div>
      <AudioPlayer soundId={sound.id} />
    </div>
  )
}

const MultipleSounds = ({ slice }: ISoundsSlice) => {
  const sounds = slice.items

  if (!sounds) return null

  return (
    <section className="py-12 md:py-24 relative">
      <div className="container max-w-6xl mx-auto text-cream">
        <div className="md:w-1/2 mb-5 md:mb-10">
          <RichText data={slice.primary.description} />
        </div>
        <div className="grid gap-10">
          {sounds.map((item, key) => (
            <BorderBox key={key} connector={key !== sounds.length - 1}>
              <SingleSound
                sound={item.sound}
                description={item.description_of_sound}
              />
            </BorderBox>
          ))}
        </div>
      </div>
      <Seperator />
    </section>
  )
}

export default MultipleSounds
