import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import { serviceFooter } from '~/services'
import { IFooter } from '~/types'

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
        <motion.div initial={{ y: '100%' }} whileInView={{ y: '0%' }} className="h-24 text-center text-cream">
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
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
