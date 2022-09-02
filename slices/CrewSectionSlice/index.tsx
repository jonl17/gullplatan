import React from 'react'
import CrewSection from '~/components/CrewSection'
import { ImageType } from '~/types'

export interface ICrewSectionSlice {
  slice: {
    primary: {
      svg_title: ImageType
    }
    items: {
      crew: {
        id: string
      }
    }[]
  }
}

const CrewSectionSlice = ({ slice }: ICrewSectionSlice) => {
  return <CrewSection slice={slice} />
}

export default CrewSectionSlice
