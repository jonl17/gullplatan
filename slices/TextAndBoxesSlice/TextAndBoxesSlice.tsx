import { RichTextBlock } from 'prismic-reactjs'
import TextAndBoxes from '~/components/TextAndBoxes'
import { TextAndBoxesSlice as TextAndBoxesSliceType } from '~/prismic-types.generated'

type Props = {
  slice: TextAndBoxesSliceType
}

export default function TextAndBoxesSlice({ slice }: Props) {
  return (
    <TextAndBoxes
      heading={slice.primary.heading as string}
      text={slice.primary.text as RichTextBlock[]}
      boxedTexts={
        slice.items.map((item) => ({
          text: item.boxed_text as RichTextBlock[],
        })) ?? []
      }
    />
  )
}
