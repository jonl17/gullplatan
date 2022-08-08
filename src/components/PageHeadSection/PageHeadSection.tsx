import { IPageHeadSectionSlice } from '@root/slices/PageHeadSectionSlice'
import React from 'react'
import Text from '~/components/Text'
import RippleMask from '~/components/RippleMask'

const PageHeadSection = ({ slice }: IPageHeadSectionSlice) => {
  return (
    <section className="container py-24 text-green-blue">
      <span className="relative bg-white inline-block">
        <Text variant="pageHeading" as="h1">
          {slice.primary.title}
        </Text>
        <RippleMask className="bg-deep-purple" />
      </span>
      <Text>{slice.primary.subtitle}</Text>
    </section>
  )
}

export default PageHeadSection
