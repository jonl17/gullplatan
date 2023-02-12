import { RichTextBlock } from 'prismic-reactjs'
import { ImageType } from '~/types'
import RichText from '~/components/RichText'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Seperator from '../Seperator'
import cn from 'classnames'

interface IImages {
  description: RichTextBlock[]
  images: ImageType[]
}

export default function Images({ description, images }: IImages) {
  const [index, setIndex] = useState(0)

  const currentImage = images[index]

  return (
    <section className="py-12 md:py-24 relative">
      <div className="container max-w-6xl mx-auto text-cream">
        <div className="md:w-1/2 mb-10 md:mb-10">
          <RichText data={description} />
        </div>

        <div className="mt-10 md:mt-20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="aspect-video w-full md:w-auto md:h-[360px] relative mx-auto rounded-[18px] md:rounded-[60px] overflow-hidden border-[6px] md:border-[10px] border-green-blue"
            >
              <Image
                objectFit="cover"
                src={currentImage.url}
                alt={currentImage.alt}
                layout="fill"
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-3 justify-center py-10">
            {images.map((_, key) => (
              <motion.button
                aria-label="Display next image"
                whileTap={{ scale: 0.9 }}
                key={key}
                onClick={() => setIndex(key)}
                className="active:outline-green"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="7"
                    stroke="#41B3A3"
                    strokeWidth="3"
                    className={cn({
                      'fill-green-blue': index === key,
                    })}
                  />
                </svg>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <Seperator />
    </section>
  )
}
