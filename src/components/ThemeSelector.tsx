import useThemeStore from '../store/ThemeStore'
import Moon from './Moon'
import Stars from './Stars'
import Clouds from './Clouds'

const ThemeSelector: React.FC = () => {
  const { isDark, setDark, setLight } = useThemeStore(state => state)

  const handleSunOnClick = () => {
    setDark()
  }

  const handleMoonOnClick = () => {
    setLight()
  }

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`relative isolate z-10 h-52 w-96 overflow-hidden rounded-md border-4 bg-gradient-to-b from-sky-400 to-sky-200 transition before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-sky-800 before:to-sky-500 before:transition before:delay-500 before:duration-500 before:content-[''] ${
          isDark ? 'before:opacity-100' : 'before:opacity-0'
        }`}
      >
        {/* //sun */}
        <div
          onClick={handleSunOnClick}
          className={`shadow-circular absolute left-20 top-8 z-10 h-10 w-10 rounded-full bg-yellow-300 transition-all duration-500 ease-out ${
            isDark ? 'translate-y-48 ' : 'delay-1000'
          }`}
        ></div>
        {/* //moon */}
        <div
          onClick={handleMoonOnClick}
          className={`clip-moon rounded-fullshadow-md absolute top-8 right-16 z-10 h-10 w-10 shadow-slate-200 transition-all duration-500 ease-out ${
            isDark ? 'translate-y-0 delay-1000' : 'translate-y-48 '
          }`}
        >
          <Moon />
        </div>
        <Stars />
        <Clouds />
      </div>
    </div>
  )
}

export default ThemeSelector
