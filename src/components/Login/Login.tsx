import { useState } from 'react'
import { motion } from 'framer-motion'
import Text from '~/components/Text'
import BorderBox from '~/components/BorderBox'
import cn from 'classnames'
import { useAuth } from '~/context/auth'

const LoginPage = () => {
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<string>()

  const { login } = useAuth()

  const validatePassword = (password: string) => {
    return password === process.env.NEXT_PUBLIC_PROJECT_PAGE_PW
  }

  const handleInput = (value: string) => {
    if (validatePassword(value)) {
      setPassword(value)
    } else {
      setPassword(undefined)
    }
  }

  const handleLogin = () => {
    if (password) {
      login()
    } else {
      setError('Rangt lykilorð, reyndu aftur.')
    }
  }

  return (
    <section className="relative py-24">
      <div className="container max-w-6xl mx-auto text-cream">
        <div className="max-w-xl mx-auto mb-24">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Text variant="heading1" as="h1">
              Innskráning
            </Text>
          </motion.span>
        </div>
        <BorderBox>
          <form
            className="p-5 grid"
            onSubmit={(e) => {
              e.preventDefault()
              handleLogin()
            }}
          >
            <Text className="mb-2" variant="heading2" as="h2">
              Lykilorð
            </Text>
            <input
              className={cn(
                'mb-5 bg-transparent border-b-[3px] border-cream w-full text-20/24 md:text-40/48  focus-visible:outline focus-visible:rounded-md px-4 py-2 focus-visible:border-transparent',
                {
                  'text-green focus-visible:outline-green': password,
                  'text-cream focus-visible:outline-purple': !password,
                }
              )}
              type="password"
              name="password"
              onChange={(e) => handleInput(e.target.value)}
            />
            {error && (
              <Text className="text-green-blue" variant="paragraph2">
                {error}
              </Text>
            )}

            <button
              type="submit"
              className="bg-green-blue py-5 px-10 rounded-lg max-w-md mx-auto focus-visible:outline-purple focus-visible:outline"
            >
              <Text className="mt-1" variant="heading2">
                Skrá inn
              </Text>
            </button>
          </form>
        </BorderBox>
      </div>
    </section>
  )
}

export default LoginPage
