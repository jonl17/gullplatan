import { MenuDocument } from '~/prismic-types.generated'
import Link from 'next/link'
import { documentToLinkField } from '@prismicio/helpers'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useBurgerMenu } from '~/store/burger-menu'
import ContactInfo from '../ContactInfo/ContactInfo'

export default function Menu({ items }: MenuDocument['data']) {
  const { setOpen } = useBurgerMenu()

  return (
    <>
      <motion.aside
        key="burger-menu"
        initial={{ x: '100%' }}
        animate={{ x: '0' }}
        exit={{ x: '100%' }}
        transition={{ bounce: 0 }}
        className="shadow fixed right-0 top-0 h-screen w-full md:w-[500px] bg-purple z-50 grid gap-10"
      >
        <motion.button
          aria-label="Close menu"
          whileTap={{ scale: 0.9 }}
          className="md:pr-5 pt-5 absolute top-5 right-10 text-green"
          onClick={() => setOpen(false)}
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 1] }}
          transition={{ duration: 0.4 }}
        >
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3L28 23" className="stroke-current" strokeWidth="6" />
            <path d="M3 23L28 3" className="stroke-current" strokeWidth="2" />
          </svg>
        </motion.button>
        <div className="px-5 md:px-0 w-full md:max-w-md mx-auto">
          <section>
            <motion.span
              className="h-full block"
              initial={{ x: 25, y: 25, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                objectFit="contain"
                src="/planeta.png"
                height={125}
                width={125}
                alt="Pláneta"
              />
            </motion.span>
          </section>
          {items.map((item: any, idx) => (
            <Link
              passHref
              href={
                item.link.id
                  ? item.link.uid
                    ? `/${item.link.uid}`
                    : '/'
                  : `/#${item.link_id}`
              }
              key={idx}
            >
              <a
                aria-label="Close the menu and go to menu item url"
                onClick={() => setOpen(false)}
                className="h-100 w-100 block mb-5"
              >
                <p className="hover:text-green text-40/48 md:text-60/72 text-cream font-buenos-black">
                  {item.postfix}
                </p>
              </a>
            </Link>
          ))}
        </div>

        <section className="relative">
          <ContactInfo />
        </section>
      </motion.aside>
      <button
        onClick={() => setOpen(false)}
        aria-label="Close menu"
        className="hidden md:block fixed top-0 left-0 h-screen w-full"
      />
    </>
  )
}
