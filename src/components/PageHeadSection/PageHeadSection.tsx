import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { RichTextBlock } from 'prismic-reactjs'
import BorderBox from '~/components/BorderBox'
import RichText from '~/components/RichText'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import { PageHeadSectionSlice } from '~/prismic-types.generated'
import { ImageType } from '~/types'
import SvgTitle from '../SvgTitle'

type TextAreaProps = {
  items: {
    text: RichTextBlock[]
  }[]
}

const PageHeadSection = ({ slice }: { slice: PageHeadSectionSlice }) => {
  const TextArea = ({ items }: TextAreaProps) => (
    <div className="md:flex gap-10 text-cream">
      {items.map((item, key) => (
        <div key={key}>
          <RichText data={item.text} />
        </div>
      ))}
    </div>
  )

  console.log(slice.variation)

  return (
    <section className="pt-24 pb-12 text-green-blue relative">
      <div className="container max-w-6xl mx-auto">
        <div
          className={cn('max-w-xl mx-auto', {
            'mb-12': slice.primary.border_box,
          })}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {slice.primary.svg_title && slice.primary.svg_title.url ? (
              <SvgTitle
                className="mb-5"
                image={slice.primary.svg_title as ImageType}
              />
            ) : (
              <Text variant="pageHeading" as="h1">
                {slice.primary.title}
              </Text>
            )}
          </motion.span>
          <Text>{slice.primary.subtitle}</Text>
          {slice.primary.image.url && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full relative aspect-video"
            >
              <Image
                objectFit="contain"
                layout="fill"
                src={slice.primary.image.url}
                alt={slice.primary.image.alt ?? ''}
              />
            </motion.div>
          )}
        </div>
        {slice.items &&
          (slice.primary.border_box ? (
            <BorderBox>
              <TextArea items={slice.items as { text: RichTextBlock[] }[]} />
            </BorderBox>
          ) : (
            <TextArea items={slice.items as { text: RichTextBlock[] }[]} />
          ))}
      </div>
      {slice.primary.arrow_connector ? (
        <svg
          width="154"
          height="169"
          viewBox="0 0 154 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92 124.5V0H102V124.5H92Z"
            fill="#41B3A3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47 124.5V0H87V124.5H47Z"
            fill="#41B3A3"
          />
          <path d="M78.9584 169L0 109L154 109L78.9584 169Z" fill="#41B3A3" />
        </svg>
      ) : (
        (slice.variation as string) === 'default' && <Seperator />
      )}
    </section>
  )
}

export default PageHeadSection
