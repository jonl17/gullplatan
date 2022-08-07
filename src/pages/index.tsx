import type { NextPage } from 'next'
import Text from '~/components/Text'

const Home: NextPage = () => {
  return (
    <div className="h-screen text-cream container">
      <Text variant="heading1" as="h1">
        heading 1
      </Text>
      <Text variant="heading2" as="h2">
        heading 2
      </Text>
      <Text variant="heading3" as="h3">
        heading 3
      </Text>
      <Text>Default paragraph</Text>
      <Text variant="paragraph2">Default paragraph</Text>
      <Text variant="paragraph3">Default paragraph</Text>
      <div className="text-green-blue"></div>
    </div>
  )
}

export default Home
