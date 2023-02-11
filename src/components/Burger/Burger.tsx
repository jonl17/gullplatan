import { useBurgerMenu } from '~/store/burger-menu'
import { motion } from 'framer-motion'

export default function Burger() {
  const { setOpen } = useBurgerMenu()
  return (
    <motion.button
      onClick={() => setOpen(true)}
      className="pr-0 md:pr-5 fixed top-10 right-10 z-40"
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-green"
      >
        <path d="M0 3H26" className="stroke-current" strokeWidth="6" />
        <path d="M0 21H26" className="stroke-current" strokeWidth="6" />
        <path d="M0 12H26" className="stroke-current" strokeWidth="2" />
      </svg>
    </motion.button>
  )
}
