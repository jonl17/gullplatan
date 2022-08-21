import React from 'react'
import CrewSection from '~/components/CrewSection'

export interface ICrewSectionSlice {
  slice: {
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
