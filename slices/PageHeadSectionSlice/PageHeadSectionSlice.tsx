import React from 'react'
import PageHeadSection from '~/components/PageHeadSection'
import { PageHeadSectionSlice } from '~/prismic-types.generated'

const PageHeadSectionSlice = ({ slice }: { slice: PageHeadSectionSlice }) => {
  return <PageHeadSection slice={slice} />
}

export default PageHeadSectionSlice
