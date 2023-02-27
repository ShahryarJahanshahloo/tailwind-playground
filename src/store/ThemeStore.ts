import { create } from 'zustand'

interface ThemeState {
  isDark: boolean
  toggleTheme: () => void
  setDark: () => void
  setLight: () => void
}

const useThemeStore = create<ThemeState>(set => ({
  isDark: false,
  toggleTheme: () => set(state => ({ isDark: !state.isDark })),
  setDark: () => set({ isDark: true }),
  setLight: () => set({ isDark: false }),
}))

export default useThemeStore
