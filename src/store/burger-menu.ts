import create from 'zustand'

interface IBurgerMenu {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useBurgerMenu = create<IBurgerMenu>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}))
