import HamburgerIcon from './HamburgerIcon'
import Menu from './Menu'
import { useCallback, useState } from 'react'

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  const onClick = useCallback(() => {
    setOpen(state => !state)
  }, [])

  return (
    <div className={`flex h-15 flex-row px-2 pt-2`}>
      <div className="flex w-full flex-row items-center justify-between">
        <HamburgerIcon isOpen={isOpen} onClick={onClick} />
      </div>
      <Menu />
    </div>
  )
}

export default Navbar
