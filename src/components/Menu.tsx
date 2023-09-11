type Props = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const Menu: React.FC<Props> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`${
        isMenuOpen ? 'bg-opacity-40' : 'pointer-events-none bg-opacity-0'
      } fixed top-15 left-0 z-10 h-screen w-full overflow-hidden bg-neutral-900 transition-all duration-300`}
    >
      <div
        className={`${
          isMenuOpen ? '' : '-translate-x-full'
        } absolute left-0 top-0 flex h-full w-64 items-center justify-center bg-white bg-opacity-100 transition-all duration-500 dark:bg-neutral-900 sm:w-80`}
      >
        <span>Empty Menu!</span>
      </div>
    </div>
  )
}

export default Menu
