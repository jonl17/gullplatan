import { createClient } from '@root/prismicio'
import { ICrewSectionSlice } from '@root/slices/CrewSectionSlice'
import { useEffect, useState } from 'react'
import CrewBox from '~/components/CrewBox'
import { CrewType } from '~/types'
import SvgTitle from '../SvgTitle'

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
    <section className="pb-12 md:py-24 container">
      <SvgTitle
        className="w-[150px] md:w-[300px] mx-auto mb-24"
        image={slice.primary.svg_title}
      />
      <div className="grid lg:grid-cols-2 gap-24 2xl:gap-44 items-baseline">
        {theCrew.map((crew, key) => (
          <CrewBox
            {...crew}
            connector={key !== theCrew.length - 1 && key !== theCrew.length - 2}
            key={key}
          />
        ))}
      </div>
    </section>
  )
}

export default CrewSection
