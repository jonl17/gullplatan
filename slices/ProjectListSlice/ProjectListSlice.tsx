import React from 'react'
import ProjectList from '~/components/ProjectList'
import { ProjectListSliceSlice } from '~/prismic-types.generated'
import { ImageType } from '~/types'

type Props = {
  slice: ProjectListSliceSlice
}

const ProjectListSlice = ({ slice }: Props) => {
  return (
    <ProjectList
      svgTitle={slice.primary.svg_title as ImageType}
      projects={slice.items.map((item) => item.project) as any[]}
    />
  )
}

export default ProjectListSlice
