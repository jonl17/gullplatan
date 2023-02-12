import { ProjectDocument } from '~/prismic-types.generated'
import { ImageType } from '~/types'
import { motion } from 'framer-motion'
import SvgTitle from '../SvgTitle'
import Link from 'next/link'
import { linkResolver } from '@root/prismicio'
import BorderBox from '../BorderBox'
import Text from '../Text'

type Props = {
  svgTitle: ImageType
  projects: ProjectDocument[]
}

export default function ProjectList({ svgTitle, projects }: Props) {
  return (
    <section className="relative py-24">
      <div className="container max-w-6xl mx-auto text-cream">
        <div className="max-w-xl mx-auto mb-24">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <SvgTitle className="mb-5" image={svgTitle} />
          </motion.span>
        </div>
        <div className="grid gap-10">
          {projects
            .filter((project) => project)
            .map((project, key) => (
              <Link
                key={key}
                href={linkResolver({
                  type: project.type,
                  id: project.id,
                  lang: project.lang,
                  link_type: 'Document',
                  uid: project.uid,
                  tags: [],
                })}
              >
                <a
                  aria-label="Open project page"
                  className="hover:text-green-blue"
                >
                  <BorderBox connector={key !== projects.length - 1}>
                    <div className="py-5">
                      <Text variant="heading2">{project.data.title}</Text>
                      <Text>{project.data.subtitle}</Text>
                    </div>
                  </BorderBox>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
