import { createContext, useContext, useEffect, useState } from 'react'

interface IAuthContext {
  auth: boolean | undefined
  login: () => void
}

const AuthContext = createContext<IAuthContext>({
  auth: undefined,
  login: () => {},
})

type Props = {
  children: React.ReactNode
}

const browser = typeof window !== undefined
const key = 'gullplatan-auth'

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<boolean>()

  useEffect(() => {
    if (browser) {
      if (window.localStorage.getItem(key)) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
  }, [])

  const login = () => {
    setAuth(true)
    if (browser) {
      window.localStorage.setItem(key, 'auth')
    }
  }

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
