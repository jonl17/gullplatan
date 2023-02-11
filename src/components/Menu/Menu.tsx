import { MenuDocument } from '~/prismic-types.generated'
import Link from 'next/link'
import { documentToLinkField } from '@prismicio/helpers'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useBurgerMenu } from '~/store/burger-menu'

export default function Menu({ items }: MenuDocument['data']) {
  const { setOpen } = useBurgerMenu()

  return (
    <motion.aside
      key="burger-menu"
      initial={{ x: '100%' }}
      animate={{ x: '0' }}
      exit={{ x: '100%' }}
      transition={{ bounce: 0 }}
      className="fixed right-0 top-0 h-screen w-full md:w-[500px] bg-purple z-50"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="md:pr-5 pt-5 absolute top-10 right-10 text-green"
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
      <div className="max-w-md mx-auto">
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
              height={150}
              width={150}
              alt="Pláneta"
            />
          </motion.span>
        </section>
        {items.map((item, idx) => (
          <Link
            passHref
            href={
              documentToLinkField(item.link as any).id
                ? documentToLinkField(item.link as any).uid ?? '/'
                : `#${item.link_id}`
            }
            key={idx}
          >
            <a onClick={() => setOpen(false)} className="h-100 w-100 block">
              <p className="text-60/72 text-cream font-buenos-light">
                {item.postfix}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </motion.aside>
  )
}
