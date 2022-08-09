import { IPageHeadSectionSlice } from '@root/slices/PageHeadSectionSlice'
import React from 'react'
import Text from '~/components/Text'
import RippleMask from '~/components/RippleMask'
import Image from 'next/image'

const PageHeadSection = ({ slice }: IPageHeadSectionSlice) => {
  return (
    <section className="container py-12 md:py-24 text-green-blue">
      <div className="max-w-xl mx-auto">
        <span className="relative bg-white inline-block">
          <Text variant="pageHeading" as="h1">
            {slice.primary.title}
          </Text>
          <RippleMask className="bg-deep-purple" />
        </span>
        <Text>{slice.primary.subtitle}</Text>
        {slice.primary.image && (
          <div className="w-full relative aspect-video">
            <Image
              objectFit="contain"
              layout="fill"
              src={slice.primary.image.url}
              alt={slice.primary.image.alt ?? ''}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHeadSection
