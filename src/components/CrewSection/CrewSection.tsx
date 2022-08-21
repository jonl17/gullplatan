import { createClient } from '@root/prismicio'
import { ICrewSectionSlice } from '@root/slices/CrewSectionSlice'
import React, { useEffect, useState } from 'react'
import { CrewType } from '~/types'
import CrewBox from '~/components/CrewBox'

const CrewSection = ({ slice }: ICrewSectionSlice) => {
  const [theCrew, setTheCrew] = useState<CrewType[]>([])

  useEffect(() => {
    const client = createClient()
    const fetchData = async () => {
      const result = await client.getAllByIDs(
        slice.items.map((item) => item.crew.id)
      )
      const crew: CrewType[] = result.map((item) => ({
        name: item.data.name,
        about: item.data.about,
        image: item.data.image,
      }))
      setTheCrew(crew)
    }
    fetchData()
  }, [slice])

  return (
    <section className="py-12 md:py-24 container">
      <div className="grid lg:grid-cols-2 gap-24 2xl:gap-44">
        {theCrew.map((crew, key) => (
          <CrewBox {...crew} key={key} />
        ))}
      </div>
    </section>
  )
}

export default CrewSection
