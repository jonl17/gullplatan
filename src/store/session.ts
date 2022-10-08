import create from 'zustand'

interface ISession {
  loggedin: boolean
  login: () => void
}

export const useSession = create<ISession>((set) => ({
  loggedin: false,
  login: () => {
    return set({
      loggedin: true,
    })
  },
}))
