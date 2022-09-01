import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Text from '~/components/Text'
import { serviceContactInformation } from '~/services'
import { ISocialMedia } from '~/types'

export default function ContactInfo() {
  const [email, setEmail] = useState<string>()
  const [socialMedia, setSocialMedia] = useState<ISocialMedia[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { email, socialMedia } = await serviceContactInformation()
      setEmail(email)
      setSocialMedia(socialMedia)
    }
    fetchData()
  }, [])

  return (
    <div className="grid place-content-center h-full">
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: '0%' }}
        className="h-24 text-center text-cream"
        transition={{ delay: 0.5 }}
      >
        <Text variant="heading3">Hafa samband</Text>
        {email && (
          <a className="underline" href={email}>
            <Text variant="paragraph3">{email.replace('mailto:', '')}</Text>
          </a>
        )}
        <div className="grid gap-3 mt-5">
          {socialMedia.map((item, key) => (
            <a rel="noreferrer" target="_blank" href={item.link.url} key={key}>
              <Text variant="heading3">{item.platform}</Text>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
