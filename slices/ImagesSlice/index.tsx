import { RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import Images from '~/components/Images'
import { ImageType, ISlice } from '~/types'

const ImagesSlice = ({ slice }: { slice: ISlice }) => (
  <Images
    description={slice.primary.description as RichTextBlock[]}
    images={slice.items?.map((item: any) => item.image as ImageType) ?? []}
  />
)

export default ImagesSlice
