import { useBurgerMenu } from '~/store/burger-menu'
import { motion } from 'framer-motion'

export default function Burger() {
  const { setOpen } = useBurgerMenu()
  return (
    <motion.button
      onClick={() => setOpen(true)}
      className="pr-0 md:pr-5 sticky top-5 right-5"
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 3H26" stroke="#41B3A3" strokeWidth="6" />
        <path d="M0 21H26" stroke="#41B3A3" strokeWidth="6" />
        <path d="M0 12H26" stroke="#41B3A3" strokeWidth="2" />
      </svg>
    </motion.button>
  )
}
