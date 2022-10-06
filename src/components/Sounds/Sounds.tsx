import { createClient } from '@root/prismicio'
import { ISoundsSlice } from '@root/slices/Sounds'
import { Elements, RichTextBlock } from 'prismic-reactjs'
import { useEffect, useState } from 'react'
import BorderBox from '~/components/BorderBox'
import RichText from '~/components/RichText'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import { SoundDocument } from '~/prismic-types.generated'
import { FieldRenderFunctionInput, FieldRenderMap } from '../RichText/types'
import AudioTrigger from './subcomponents/AudioTrigger'

const renderPrismicParagraph = ({
  key,
  children,
}: FieldRenderFunctionInput) => (
  <Text variant="paragraph2" className="mb-2" key={key}>
    {children}
  </Text>
)

const renderPrismicStrong = ({ key, children }: FieldRenderFunctionInput) => (
  <span key={key} className="text-green-blue">
    {children}
  </span>
)

const fieldMapOverwrite: FieldRenderMap = {
  [Elements.paragraph]: renderPrismicParagraph,
  [Elements.strong]: renderPrismicStrong,
}

type SingleSoundProps = {
  sound: { id: string }
  description: RichTextBlock[]
}

const SingleSound = ({ sound, description }: SingleSoundProps) => {
  const [soundUrl, setSoundUrl] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient()
      const result = (await client.getByID(sound.id)) as SoundDocument
      const file = result.data.file as { url: string }
      setSoundUrl(file.url)
    }
    fetchData()
  }, [sound])

  return (
    <div className="md:flex flex-col md:flex-row text-center md:text-left md:justify-between gap-10">
      <div>
        <RichText fieldMapOverwrite={fieldMapOverwrite} data={description} />
      </div>
      {soundUrl && <AudioTrigger audioFile={soundUrl} />}
    </div>
  )
}

const MultipleSounds = ({ slice }: ISoundsSlice) => {
  const sounds = slice.items

  if (!sounds) return null

  return (
    <>
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
    </>
  )
}

export default MultipleSounds
