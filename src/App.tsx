import useThemeStore from './store/ThemeStore'
import Navbar from './components/Navbar'

function App() {
  const isDark = useThemeStore(state => state.isDark)

  return (
    <div className="h-full min-h-screen">
      <div className={isDark ? 'dark' : ''}>
        <Navbar />
      </div>
    </div>
  )
}

export default App
