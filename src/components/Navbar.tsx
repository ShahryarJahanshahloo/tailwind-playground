import HamburgerIcon from './HamburgerIcon'

type Props = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const Navbar: React.FC<Props> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="fixed top-0 left-0 z-20 flex h-15 w-full bg-white px-2 shadow-md dark:bg-neutral-900 dark:text-neutral-300">
      <div className="flex w-full flex-row items-center">
        <div className="w-12">
          <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
        <h1 className="flex-grow cursor-default text-center font-bold">
          Tailwind Playground
        </h1>
        <div className="w-12"></div>
      </div>
    </div>
  )
}

export default Navbar
