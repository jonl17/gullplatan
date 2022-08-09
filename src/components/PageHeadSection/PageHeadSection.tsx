import { IPageHeadSectionSlice } from '@root/slices/PageHeadSectionSlice'
import React from 'react'
import Text from '~/components/Text'
import RippleMask from '~/components/RippleMask'
import Image from 'next/image'
import RichText from '~/components/RichText'
import Seperator from '~/components/Seperator'

const PageHeadSection = ({ slice }: IPageHeadSectionSlice) => {
  return (
    <section className="py-12 md:py-24 text-green-blue relative">
      <div className="container">
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
        {slice.items && (
          <div className="md:flex gap-10 text-cream pt-6 md:py-12">
            {slice.items.map((item, key) => (
              <div key={key}>
                <RichText data={item.text} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Seperator />
    </section>
  )
}

export default PageHeadSection
