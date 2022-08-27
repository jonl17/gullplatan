import { IPageHeadSectionSlice } from '@root/slices/PageHeadSectionSlice'
import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { RichTextBlock } from 'prismic-reactjs'
import BorderBox from '~/components/BorderBox'
import RichText from '~/components/RichText'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import RippleMask from '../RippleMask'

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
          <motion.span initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
            <RippleMask fill='transparent' color='fill-green-blue' text={slice.primary.title} />
          </motion.span>
          {/* <RippleMask className="bg-purple" /> */}
          <Text>{slice.primary.subtitle}</Text>
          {slice.primary.image.url && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-full relative aspect-video">
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
