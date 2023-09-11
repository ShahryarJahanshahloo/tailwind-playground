import Robot from '../assets/moon-lunarbot.png'
import Title from '../assets/lunar-title.png'
import Stars from '../assets/stars.png'

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-neutral-900 sm:h-136">
      <div className="flex flex-col px-8 sm:flex-row-reverse">
        <div className="shrink-0 p-8 sm:p-0">
          <img src={Title} alt="title" className="sm:h-80 sm:w-96" />
        </div>
        <img src={Robot} alt="robot" />
      </div>
      <img src={Stars} alt="stars" className="absolute w-full" />
    </div>
  )
}

export default Hero
