import { Elements, RichTextBlock } from 'prismic-reactjs'
import BorderBox from '~/components/BorderBox'
import RichText from '~/components/RichText'
import {
  FieldRenderFunctionInput,
  FieldRenderMap,
} from '~/components/RichText/types'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'

type Props = {
  heading: string
  text: RichTextBlock[]
  boxedTexts: {
    text: RichTextBlock[]
  }[]
}

const renderPrismicParagraph = ({
  key,
  children,
}: FieldRenderFunctionInput) => (
  <Text variant="paragraph1" className="mb-2" key={key}>
    {children}
  </Text>
)

const fieldMapOverwrite: FieldRenderMap = {
  [Elements.paragraph]: renderPrismicParagraph,
}

export default function TextAndBoxes({ heading, text, boxedTexts }: Props) {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container max-w-6xl mx-auto text-cream">
        <Text className="text-green-blue" as="h1" variant="heading2">
          {heading}
        </Text>
        <div className="md:w-2/3 mb-5 md:mb-10">
          <RichText data={text} />
        </div>
        <div className="grid gap-10">
          {boxedTexts.map((item, key) => (
            <BorderBox key={key} connector={key !== boxedTexts.length - 1}>
              <div className="p-6">
                <RichText
                  fieldMapOverwrite={fieldMapOverwrite}
                  data={item.text}
                />
              </div>
            </BorderBox>
          ))}
        </div>
      </div>
      <Seperator />
    </section>
  )
}
