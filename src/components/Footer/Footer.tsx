import Seperator from '~/components/Seperator'
import ContactInfo from '../ContactInfo/ContactInfo'

const Footer = () => {
  return (
    <footer className="relative h-[300px] md:h-[500px] bg-purple">
      <Seperator double className="top-0 h-6 md:h-12 text-green-blue" />
      <ContactInfo />
    </footer>
  )
}

export default Footer
