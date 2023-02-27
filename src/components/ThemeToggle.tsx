import { Switch } from '@headlessui/react'
import useThemeStore from '../store/ThemeStore'

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore(state => state)

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className={`${
        isDark ? 'bg-zinc-700' : 'bg-gray-100'
      } relative inline-flex h-9 w-16 items-center rounded-full`}
    >
      <span
        className={`${
          isDark
            ? 'translate-x-8 bg-gray-100'
            : 'translate-x-1 bg-gray-300 shadow-inner'
        } inline-block h-7 w-7 transform rounded-full transition`}
      />
    </Switch>
  )
}

export default ThemeToggle
