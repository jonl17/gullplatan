import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import RippleMask from '~/components/RippleMask'
import Text from '~/components/Text'

type Props = {
  title: string
  subtitle: string
}

const SlugPage: NextPage<Props> = ({
  title = 'Gullplata',
  subtitle = 'Bubbe',
}) => {
  return (
    <div className="h-screen text-cream container pt-8">
      <div className="text-green-blue max-w-lg mx-auto">
        <span className="relative bg-white inline-block">
          <Text variant="pageHeading" as="h1">
            {title}
          </Text>
          <RippleMask className="bg-deep-purple" />
        </span>
        <Text variant="paragraph1" as="h2">
          {subtitle}
        </Text>
      </div>
    </div>
  )
}

export default SlugPage
