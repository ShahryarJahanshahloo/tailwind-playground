import useThemeStore from '../store/ThemeStore'

const Stars: React.FC = () => {
  const { isDark, setDark, setLight } = useThemeStore(state => state)

  return (
    <>
      <div
        className={`absolute top-10 left-10 h-0.5 w-0.5 rounded-full bg-white transition duration-500 ${
          isDark ? 'opacity-100 delay-1000' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-2 left-20 h-0.5 w-0.5 rounded-full bg-white transition duration-500 ${
          isDark ? 'opacity-100 delay-1000' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-16 left-32 h-0.5 w-0.5 rounded-full bg-white transition duration-500 ${
          isDark ? 'opacity-100 delay-1000' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-5 left-40 h-0.5 w-0.5 rounded-full bg-white transition duration-500 ${
          isDark ? 'opacity-100 delay-1000' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-14 left-56 h-0.5 w-0.5 rounded-full bg-white transition duration-500 ${
          isDark ? 'opacity-100 delay-1000' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-4 left-72 h-0.5 w-0.5 rounded-full bg-white transition duration-500 ${
          isDark ? 'opacity-100 delay-1000' : 'opacity-0'
        }`}
      ></div>
    </>
  )
}

export default Stars
