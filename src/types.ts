import { RichTextBlock } from 'prismic-reactjs'

export interface IMenuItem {
  page: any
  label: string
}

export interface IFooter {
  text: RichTextBlock[]
  links: {
    label: string
    link: {
      url: string
    }
  }[]
}
