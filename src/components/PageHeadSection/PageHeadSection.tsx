import { IPageHeadSectionSlice } from '@root/slices/PageHeadSectionSlice'
import React from 'react'
import Text from '~/components/Text'
import Image from 'next/image'
import RichText from '~/components/RichText'
import Seperator from '~/components/Seperator'
import BorderBox from '~/components/BorderBox'
import { RichTextBlock } from 'prismic-reactjs'
import cn from 'classnames'

type TextAreaProps = {
  items: {
    text: RichTextBlock[]
  }[]
}

const PageHeadSection = ({ slice }: IPageHeadSectionSlice) => {
  const TextArea = ({ items }: TextAreaProps) => (
    <div className="md:flex gap-10 text-cream pt-6 md:pt-12">
      {items.map((item, key) => (
        <div key={key}>
          <RichText data={item.text} />
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-12 md:py-24 text-green-blue relative">
      <div className="container max-w-6xl mx-auto">
        <div
          className={cn('max-w-xl mx-auto', {
            'mb-12': slice.primary.border_box,
          })}
        >
          <span className="relative bg-white inline-block">
            <Text variant="pageHeading" as="h1">
              {slice.primary.title}
            </Text>
            {/* <RippleMask className="bg-purple" /> */}
          </span>
          <Text>{slice.primary.subtitle}</Text>
          {slice.primary.image.url && (
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
        {slice.items &&
          (slice.primary.border_box ? (
            <BorderBox>
              <TextArea items={slice.items} />
            </BorderBox>
          ) : (
            <TextArea items={slice.items} />
          ))}
      </div>
      <Seperator />
    </section>
  )
}

export default PageHeadSection
