import React from 'react'
import { CrewType } from '~/types'
import Image from 'next/image'
import Text from '~/components/Text'
import BorderBox from '~/components/BorderBox'
import RichText from '~/components/RichText'

const CrewBox = ({ name, about, image }: CrewType) => {
  return (
    <div className="grid gap-6 lg:gap-12">
      <div className="max-w-md mx-auto w-full h-full">
        <Image
          src={image.url}
          alt={image.alt}
          layout="responsive"
          height={image.dimensions.height}
          width={image.dimensions.width}
        />
      </div>
      <Text className="text-green-blue text-center" variant="heading1" as="h1">
        {name}
      </Text>
      <BorderBox connector>
        <div className="text-cream pt-5">
          <RichText data={about} />
        </div>
      </BorderBox>
    </div>
  )
}

export default CrewBox
