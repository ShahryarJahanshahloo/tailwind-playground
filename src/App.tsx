import { useState } from 'react'
import './App.css'

function App() {
  const [isDark, setDark] = useState(false)

  const toggleDarkHandler = () => {
    setDark(state => !state)
  }

  return (
    <div className='App'>
      <div className={isDark ? 'dark' : ''}>
        <input
          type='checkbox'
          className={`daisy-toggle daisy-toggle-lg ${
            isDark ? 'shadow-violet-400' : 'bg-white shadow-violet'
          }`}
          onClick={toggleDarkHandler}
          checked={isDark}
        />
        <h1 className='dark:bg-black'>Something</h1>
      </div>
    </div>
  )
}

export default App
