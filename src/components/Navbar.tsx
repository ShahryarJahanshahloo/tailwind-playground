import ThemeToggle from './ThemeToggle'
import HamburgerIcon from './HamburgerIcon'
import Menu from './Menu'
import { useCallback, useState } from 'react'

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  const onClick = useCallback(() => {
    setOpen(state => !state)
  }, [])

  return (
    <div className="flex flex-row px-2 pt-2">
      <HamburgerIcon isOpen={isOpen} onClick={onClick} />
      <ThemeToggle />
      <Menu />
    </div>
  )
}

export default Navbar
