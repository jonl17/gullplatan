import { RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import Sounds from '~/components/Sounds'

export interface ISoundsSlice {
  slice: {
    primary: {
      description: RichTextBlock[]
    }
    items?: {
      sound: {
        url: string
      }
      description_of_sound: RichTextBlock[]
    }[]
  }
}

const SoundsSlice = ({ slice }: ISoundsSlice) => {
  return <Sounds slice={slice} />
}

export default SoundsSlice
