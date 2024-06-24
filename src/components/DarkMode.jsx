import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

const DarkMode = ({ darkMode, setDarkMode}) => {
    const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";
    return (
      <div className='relative flex w-fit items-center rounded-full border-indigo-600 border-2'>
          <button 
              className={`${TOGGLE_CLASSES} ${!darkMode ? 'text-white' : 'text-slate-300'}`}
              onClick={() => setDarkMode(false)}
          >
             <FiSun className='relative z-10 text-lg md:text-sm' /> 
          </button>
  
          <button
              className={`${TOGGLE_CLASSES} ${darkMode ? 'text-white' : 'text-slate-800'}`}
              onClick={() => setDarkMode(true)}
          >
              <FiMoon className='relative z-10 text-lg md:text-sm'/>
          </button>
  
          <div className={`absolute inset-0 z-0 flex items-center ${darkMode ? 'justify-end' : 'justify-start'}`}>
              <motion.span 
                  layout
                  transition={{ type: "spring", damping: 15, stiffness: 250}}
                  className='h-full w-1/2 rounded-full px-2 bg-gradient-to-r from-violet-600 to-indigo-600'
              />
          </div>
      </div>
    )
}

export default DarkMode