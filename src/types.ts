import { RichTextBlock } from 'prismic-reactjs'

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

export type CrewType = {
  name: string
  about: RichTextBlock[]
  image: ImageType
}

export type MenuItemType = {
  label: string
  url?: string
}
export interface IMenu {
  label: string
  image: ImageType
  submenu: MenuItemType[]
}

export interface ISlice {
  items?: any[]
  primary?: any
}
