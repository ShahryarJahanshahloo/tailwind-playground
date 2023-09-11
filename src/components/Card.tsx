import { AiOutlinePlus as Plus } from 'react-icons/ai'
import { Popover } from '@headlessui/react'

export enum Background {
  green = 'bg-lime-200',
  red = 'bg-red-200',
  yellow = 'bg-amber-200',
  blue = 'bg-sky-200',
}

type Props = {
  data: {
    name: string
    description: string
    background: keyof typeof Background
    img: string
  }
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-104 flex w-72 flex-shrink-0 flex-col rounded-sm shadow-lg dark:bg-neutral-700">
      <div
        className={`relative flex h-20 items-center justify-center rounded-t-sm sm:h-28 ${
          Background[data.background]
        }`}
      >
        <Popover
          className={`absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full text-xl text-neutral-600 shadow-md ${
            Background[data.background]
          }`}
        >
          <Popover.Button>
            <Plus />
          </Popover.Button>
          <Popover.Panel className="absolute top-10 right-10 z-30">
            <div
              className={`flex flex-col gap-4 rounded-lg p-4 text-base text-neutral-700 shadow-xl ${
                Background[data.background]
              }`}
            >
              <a href="#">Analytics</a>
              <a href="#">Engagement</a>
              <a href="#">Security</a>
              <a href="#">Integrations</a>
            </div>
          </Popover.Panel>
        </Popover>
        <div className="absolute -bottom-8 h-16 w-16 overflow-hidden rounded-full border-4 border-neutral-50 bg-white shadow-lg">
          <img src={data.img} alt="user" />
        </div>
      </div>
      <div className="flex flex-grow flex-col gap-6 pt-12">
        <div className="text-center">{data.name}</div>
        <div className="px-6 text-center text-neutral-400">
          {data.description}
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Card
