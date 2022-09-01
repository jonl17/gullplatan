import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Seperator from '~/components/Seperator'
import Text from '~/components/Text'
import { serviceFooter } from '~/services'
import { IFooter } from '~/types'
import ContactInfo from '../ContactInfo/ContactInfo'

const Footer = () => {
  return (
    <footer className="relative h-[300px] md:h-[500px] bg-purple">
      <Seperator double className="top-0 h-6 md:h-12" />
      <ContactInfo />
    </footer>
  )
}

export default Footer
