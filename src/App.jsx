import { useState } from 'react'
import DarkMode from './components/DarkMode'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {

    const [darkMode, setDarkMode] = useState(false)

  return (
    <body className={darkMode && 'dark'}>

      <div className='w-full h-full flex flex-col bg-cyan-50 text-zinc-900 dark:bg-zinc-900 dark:text-cyan-50'>

        <header className='w-full h-20 flex-none relative'>  {/* bg-green-800 */}  
          <aside className='absolute top-0 left-0 p-6 font-semibold text-xl'>
            Portfolio
          </aside>
          <aside className='absolute top-0 right-0 p-6'>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </aside>
        </header>

        <main className='w-full h-full grow text-center'> {/* bg-yellow-100 */}
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Experience />
        </main>

        <footer id="contact" className='w-full h-full flex-none text-center'>
            <Contact />
        </footer>
      </div>
    </body>
  )
}

export default App
