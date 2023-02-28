import useThemeStore from '../store/ThemeStore'

type Props = {
  styles: string
}

const Cloud: React.FC<Props> = props => {
  const { isDark } = useThemeStore(state => state)

  return (
    <div
      className={`absolute ${
        props.styles
      } ring-1 ring-transparent transition duration-700 ${
        isDark ? 'opacity-0 delay-200' : 'opacity-100 delay-500'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="h-12 w-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    </div>
  )
}

export default Cloud
