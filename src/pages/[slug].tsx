import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import RippleMask from '~/components/RippleMask'
import Text from '~/components/Text'
import { serviceAllPageSlugs, servicePageData } from '~/services'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await serviceAllPageSlugs()
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    }
  }

  const slug = context.params.slug as string

  const data = await servicePageData(slug)

  return {
    props: {
      title: data.title,
      subtitle: data.subtitle,
    },
  }
}

type Props = {
  title: string
  subtitle: string
}

const SlugPage: NextPage<Props> = ({ title, subtitle }) => {
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
