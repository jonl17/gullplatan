import { RichTextBlock } from 'prismic-reactjs'
import Sounds from '~/components/Sounds'

export interface ISoundsSlice {
  slice: {
    primary: {
      description: RichTextBlock[]
    }
    items?: {
      sound: {
        id: string
      }
      description_of_sound: RichTextBlock[]
    }[]
  }
}

const SoundsSlice = ({ slice }: ISoundsSlice) => {
  return <Sounds slice={slice} />
}

export default SoundsSlice
