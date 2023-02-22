import ThemeToggle from './components/ThemeToggle'
import useThemeStore from './store/ThemeStore'

function App() {
  const isDark = useThemeStore(state => state.isDark)

  return (
    <div className='App p-4'>
      <div className={isDark ? 'dark' : ''}>
        <ThemeToggle />
        <h1 className='dark:bg-black'>Something</h1>
      </div>
    </div>
  )
}

export default App
