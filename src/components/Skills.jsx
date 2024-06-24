import React from 'react'

const Skills = () => {
  return (
    <article className='flex flex-col gap-8 max-w-[80%] m-auto mt-12 text-zinc-900 dark:text-cyan-50'>
        <h1 className='md:flex md:justify-start text-4xl font-bold items-start'>My Skills</h1>
        <div className='grid grid-cols-2 place-items-center place-content-center md:grid-cols-3 gap-8'>
           <img src="../../skills Logos/Java-Logo.png" alt="Java Logo" className='h-36 w-40 hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../public/skills Logos/Javascript-Logo.png" alt="Javascript Logo" className='h-32 w-26 border-zinc-600 hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../skills Logos/React-Logo.png" alt="React Logo" className='h-40 w-44  hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../skills Logos/Nodejs-Logo.png" alt="Nodejs Logo" className='h-40 w-40  hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../public/skills Logos/ExpressJs-Logo.png" alt="ExpressJs Logo" className='h-36 w-36  hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../skills Logos/Sql-Logo.png" alt="Sql Logo" className='h-36 w-36  hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../skills Logos/MongoDB-Logo.png" alt="MongoDB Logo" className='h-36 w-40  hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../skills Logos/Tailwind-Logo.png" alt="Tailwind Logo" className='h-40 w-40 object-fill rounded-full dark:bg-stone-100 hover:scale-110 transition-all duration-200 ease-in'/>
           <img src="../../skills Logos/Git-Logo.png" alt="Git Logo" className='h-32 w-36  hover:scale-110 transition-all duration-200 ease-in'/>
        </div>
    </article>
  )
}

export default Skills