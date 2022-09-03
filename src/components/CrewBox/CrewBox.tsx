import { motion } from 'framer-motion'
import Image from 'next/image'
import BorderBox from '~/components/BorderBox'
import RichText from '~/components/RichText'
import Text from '~/components/Text'
import { CrewType } from '~/types'

const CrewBox = ({
  name,
  about,
  image,
  connector = true,
}: CrewType & { connector?: boolean }) => {
  return (
    <div className="grid gap-6 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto w-full h-full"
      >
        <Image
          src={image.url}
          alt={image.alt}
          layout="responsive"
          height={image.dimensions.height}
          width={image.dimensions.width}
        />
      </motion.div>
      <Text className="text-green-blue text-center" variant="heading2" as="h2">
        {name}
      </Text>
      <BorderBox connector={connector}>
        <div className="text-cream">
          <RichText data={about} />
        </div>
      </BorderBox>
    </div>
  )
}

export default CrewBox
