import { NextPage } from 'next'
import { useState } from 'react'
import { supabase } from '~/utils/supabaseClient'
import { motion } from 'framer-motion'
import SvgTitle from '~/components/SvgTitle'
import Text from '~/components/Text'
import BorderBox from '~/components/BorderBox'
import cn from 'classnames'

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState<string>()
  const [loading, setLoading] = useState(false)

  const validateEmail = (email: string) => {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    return email.toLocaleLowerCase().match(regexp)
  }

  const handleInput = (value: string) => {
    if (validateEmail(value)) {
      setEmail(value)
    } else {
      setEmail(undefined)
    }
  }

  const handleLogin = async () => {
    if (email) {
      try {
        setLoading(true)
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo:
              process.env.NODE_ENV === 'production'
                ? 'https://gullplatan.is/verkefni'
                : 'localhost:3000/verkefni',
          },
        })
        if (error) throw error
        alert('Kíktu í pósthólfið til að skrá þig inn!')
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
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
              Netfang
            </Text>
            <Text className="mb-5" variant="paragraph2">
              Settu inn netfangið þitt til þess að fá sendan innskráningarhlekk.
            </Text>
            <input
              className={cn(
                'mb-10 bg-transparent border-b-[3px] border-cream w-full text-20/24 md:text-40/48 focus-visible:outline-purple focus-visible:outline focus-visible:rounded-md px-4 py-2 focus-visible:border-transparent',
                {
                  'text-green': email,
                  'text-cream': !email,
                }
              )}
              type="text"
              name="email"
              onChange={(e) => handleInput(e.target.value)}
            />
            {loading ? (
              <Text variant="heading2" className="py-5 px-10 max-w-md mx-auto">
                Hleður...
              </Text>
            ) : (
              <button
                disabled={loading}
                type="submit"
                className="bg-green-blue py-5 px-10 rounded-lg max-w-md mx-auto focus-visible:outline-purple focus-visible:outline"
              >
                <Text className="mt-1" variant="heading2">
                  Senda hlekk
                </Text>
              </button>
            )}
          </form>
        </BorderBox>
      </div>
    </section>
  )
}

export default LoginPage
