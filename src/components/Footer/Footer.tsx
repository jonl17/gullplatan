import React, { useEffect, useState } from 'react'
import Seperator from '~/components/Seperator'
import { serviceFooter } from '~/services'
import { IFooter } from '~/types'
import Text from '~/components/Text'

const Footer = () => {
  const [data, setData] = useState<IFooter>()

  useEffect(() => {
    const fetchFooter = async () => {
      const data = await serviceFooter()
      setData({ links: data.links })
    }
    fetchFooter()
  }, [])

  return (
    <footer className="relative h-[300px] md:h-[500px] bg-purple">
      <Seperator double className="top-0 h-6 md:h-12" />
      <div className="grid place-content-center h-full">
        <div className="h-24 text-center text-cream">
          <Text variant="heading3">Hafa samband</Text>
          <a className="underline" href="mailto:thykjo@thykjo.com">
            <Text variant="paragraph3">thykjo@thykjo.com</Text>
          </a>
          <div className="grid gap-3 mt-5">
            {data &&
              data.links.map((item, key) => (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={item.link.url}
                  key={key}
                >
                  <Text variant="heading3">{item.label}</Text>
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
