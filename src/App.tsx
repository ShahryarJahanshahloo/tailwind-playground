import useThemeStore from './store/ThemeStore'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import Hero from './components/Hero'
import Cards from './components/Cards'
import { useCallback, useState } from 'react'
import Menu from './components/Menu'

function App() {
  const isDark = useThemeStore(state => state.isDark)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(state => !state)
  }, [])

  return (
    <div
      className={`h-full min-h-screen overflow-x-hidden ${
        isDark ? 'dark' : ''
      }`}
    >
      <div className="dark:bg-neutral-800 dark:text-neutral-300">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div
          className={`transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-12 delay-100' : ''
          }`}
        >
          <div className="flex w-full flex-col pt-15">
            <Hero />
          </div>

          <div className="pt-28 text-center font-serif text-4xl dark:text-neutral-200 sm:pt-36 sm:text-6xl">
            NEWPOST YORK
          </div>
          <div className="columns-1 px-4 pt-10 pb-28 font-serif text-base leading-7 dark:text-neutral-400 sm:columns-2 sm:gap-x-12 sm:px-12 sm:pb-36 sm:pt-14 lg:columns-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim omnis
            eligendi veritatis dolores debitis molestias velit, quas animi
            adipisci fugiat natus. Odio ducimus consequatur distinctio, officiis
            sequi reiciendis debitis asperiores totam provident quod accusantium
            non fuga facilis facere! Veniam laudantium quia in quo assumenda
            quisquam et minima a aspernatur, dolores fugit voluptatum! Expedita
            nisi optio recusandae facilis dolor illo explicabo necessitatibus
            suscipit, aliquam ab placeat rem quae aspernatur amet eos in fugit
            consequuntur mollitia et voluptate possimus! Sit ad a neque ut
            quaerat, temporibus aperiam deleniti nostrum fugit. Voluptatibus
            corporis omnis reprehenderit, vitae accusamus quae incidunt eligendi
            perferendis soluta veritatis dolorem tempora modi minima quod porro
            quaerat eveniet? Aut possimus facilis laborum hic delectus cum
            eveniet! Ducimus, facere qui. Veritatis quod dolor illo, sit
            quisquam dolorem explicabo quaerat consequatur placeat quis sapiente
            non fugit delectus aliquam! Aperiam eveniet distinctio explicabo
            possimus, quisquam inventore provident maxime accusantium eos quas
            ipsam fugit sequi porro tempore autem reiciendis iusto. Omnis
            accusantium suscipit, numquam sit expedita repellendus id maxime
            minus inventore mollitia assumenda architecto cum porro corrupti
            itaque rerum consectetur. Laborum cupiditate, commodi ipsa fugiat
            illo hic sint ducimus veritatis itaque, eos accusamus error ullam.
            Deserunt sed sequi eaque rerum, eveniet laudantium, culpa illo ex
            sit repellendus dicta magnam necessitatibus. Reprehenderit officia
            delectus dolor consequatur doloribus est. Quidem, possimus eaque.
            Magnam maiores praesentium aperiam id, modi harum repellat accusamus
            officiis voluptatibus, dicta architecto autem quam dolore deleniti
            voluptatum placeat. Impedit nesciunt at quos laborum cupiditate.
            Nulla ullam id tempora aliquid pariatur debitis? Mollitia recusandae
            quidem beatae, nobis reprehenderit odio. Ut quam ad nobis sunt
            mollitia quae magnam excepturi pariatur quia, labore perferendis,
            molestiae dolorum consequatur maiores obcaecati vitae! Deleniti
            molestias modi maxime laudantium magnam? Quas a sint sequi totam
            fuga animi quidem ut dolores delectus ipsum, nemo obcaecati
            reprehenderit repudiandae, recusandae exercitationem quis nostrum.
          </div>

          <Cards />

          <div className="pattern-light dark:pattern-dark mt-24 flex w-full flex-col gap-12 px-6 py-28 dark:bg-neutral-800 sm:mt-36 sm:justify-center">
            <div className="flex items-center justify-center">
              <h2 className="text-2xl font-bold sm:text-4xl">
                Try tapping on the sun <span className="">☀️</span>
              </h2>
            </div>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
