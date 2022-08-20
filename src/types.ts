import { RichTextBlock } from 'prismic-reactjs'

export interface IMenuItem {
  page: any
  label: string
}

export interface IFooter {
  links: {
    label: string
    link: {
      url: string
    }
  }[]
}

export type ImageType = {
  url: string
  alt: string
  dimensions: {
    width: number
    height: number
  }
}
