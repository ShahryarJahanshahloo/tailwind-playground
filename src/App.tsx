import useThemeStore from './store/ThemeStore'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'

function App() {
  const isDark = useThemeStore(state => state.isDark)

  return (
    <div className="h-full min-h-screen">
      <div className={isDark ? 'dark' : ''}>
        <Navbar />
        <ThemeSelector />
      </div>
    </div>
  )
}

export default App
