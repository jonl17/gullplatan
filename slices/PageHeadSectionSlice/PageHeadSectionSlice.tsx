import React from 'react'
import PageHeadSection from '~/components/PageHeadSection'

export interface IPageHeadSectionSlice {
  slice: {
    primary: {
      title: string
      subtitle: string
      image: {
        url: string
        alt: string
      }
      border_box: boolean
    }
    items?: {
      text: any
    }[]
  }
}

const PageHeadSectionSlice = ({ slice }: IPageHeadSectionSlice) => {
  return <PageHeadSection slice={slice} />
}

export default PageHeadSectionSlice
