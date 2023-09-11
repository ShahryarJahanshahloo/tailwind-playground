import Card, { Background } from './Card'
import Pic1 from '../assets/av1.png'
import Pic2 from '../assets/av2.png'
import Pic3 from '../assets/av3.png'
import Pic4 from '../assets/av4.png'

const users: {
  name: string
  description: string
  background: keyof typeof Background
  img: string
}[] = [
  {
    name: 'Samuel Robinson',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore repudiandae, labore debitis minima laboriosam in atque asperiores pariatur.',
    background: 'blue',
    img: Pic1,
  },
  {
    name: 'Ron Lee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore repudiandae, labore debitis minima laboriosam in atque asperiores pariatur.',
    background: 'green',
    img: Pic2,
  },
  {
    name: 'Donald Richardson',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore repudiandae, labore debitis minima laboriosam in atque asperiores pariatur.',
    background: 'red',
    img: Pic3,
  },
  {
    name: 'Alyssa Sibua',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore repudiandae, labore debitis minima laboriosam in atque asperiores pariatur.',
    background: 'yellow',
    img: Pic4,
  },
]

const Cards = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-10 sm:flex-row sm:flex-wrap sm:justify-center">
      {users.map(item => {
        return <Card key={item.name} data={item} />
      })}
    </div>
  )
}

export default Cards
