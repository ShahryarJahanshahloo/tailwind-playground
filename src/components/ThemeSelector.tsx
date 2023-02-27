import useThemeStore from '../store/ThemeStore'
import Moon from './Moon'
import Stars from './Stars'

//TODO: use debounce
//TODO: add clouds
const ThemeSelector: React.FC = () => {
  const { isDark, setDark, setLight } = useThemeStore(state => state)

  const handleSunOnClick = () => {
    setDark()
  }

  const handleMoonOnClick = () => {
    setLight()
  }

  return (
    <div className="flex flex-col justify-center px-6 py-4 ">
      <div
        className={`relative isolate z-10 my-4 h-52 overflow-hidden rounded-xl bg-gradient-to-b from-sky-400 to-sky-200 transition before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-sky-800 before:to-sky-500 before:transition before:delay-500 before:duration-500 before:content-[''] ${
          isDark ? 'before:opacity-100' : 'before:opacity-0'
        }`}
      >
        {/* //sun */}
        <div
          onClick={handleSunOnClick}
          className={`absolute top-8 left-8 z-10 h-10 w-10 rounded-full bg-yellow-300 shadow-md shadow-yellow-300 transition-all duration-500 ease-out ${
            isDark ? 'translate-y-48 ' : 'delay-1000'
          }`}
        ></div>
        {/* //moon */}
        <div
          onClick={handleMoonOnClick}
          className={`clip-moon rounded-fullshadow-md absolute top-8 right-8 z-10 h-10 w-10 shadow-slate-200 transition-all duration-500 ease-out ${
            isDark ? 'translate-y-0 delay-1000' : 'translate-y-48 '
          }`}
        >
          <Moon />
        </div>
        <Stars />
      </div>
    </div>
  )
}

export default ThemeSelector
