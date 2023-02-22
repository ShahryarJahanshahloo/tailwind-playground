import { Switch } from '@headlessui/react'
import useThemeStore from '../store/ThemeStore'

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore(state => state)

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className={`${
        isDark ? 'bg-slate-700' : 'bg-gray-200'
      } relative inline-flex h-8 w-16 items-center rounded-full`}
    >
      <span
        className={`${
          isDark ? 'translate-x-9 bg-gray-100' : 'translate-x-1 bg-slate-700'
        } inline-block h-6 w-6 transform rounded-full transition`}
      />
    </Switch>
  )
}

export default ThemeToggle
