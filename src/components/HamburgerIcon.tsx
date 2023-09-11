type Props = {
  isOpen: boolean
  onClick: () => void
}

const HamburgerIcon: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button className="relative" onClick={onClick}>
      <div
        className={`rounded-fulltransition-all relative inline-flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden duration-200`}
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={`h-[2px] w-7 origin-left transform bg-black transition-all duration-300 dark:bg-slate-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 transform rounded bg-black transition-all delay-75 duration-300 dark:bg-slate-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 origin-left transform bg-black transition-all delay-150 duration-300 dark:bg-slate-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>

          <div
            className={`absolute top-2.5 flex transform items-center justify-between transition-all duration-500 ${
              isOpen ? 'w-12 translate-x-0' : 'w-0 -translate-x-10'
            }`}
          >
            <div
              className={`absolute h-[2px] w-5 transform bg-black transition-all delay-300 duration-500 dark:bg-slate-300 ${
                isOpen ? 'rotate-45' : 'rotate-0'
              }`}
            ></div>
            <div
              className={`absolute h-[2px] w-5 transform bg-black transition-all delay-300 duration-500 dark:bg-slate-300 ${
                isOpen ? '-rotate-45' : '-rotate-0'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default HamburgerIcon
