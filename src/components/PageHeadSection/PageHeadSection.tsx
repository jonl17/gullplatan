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
import { Arrow } from '../Icon'

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

  return (
    <section
      className={cn('pt-24 pb-12 text-green-blue relative', {
        'pb-12': slice.variation === 'default',
        'pb-0': slice.variation !== 'default',
      })}
    >
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
        <Arrow />
      ) : (
        (slice.variation as string) === 'default' && <Seperator />
      )}
    </section>
  )
}

export default PageHeadSection
