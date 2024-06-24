import React from 'react'

const Intro = () => {
  return (
    <section className='mt-8 text-5xl text-zinc-800 dark:text-cyan-50 font-semibold'>
        <h1 className='p-4'>
            Hi, I'm
            <span className='text-indigo-600'>
                {' '}Harshith Teja
            </span>
        </h1>
        <h1 className='p-4'>An aspiring Software Developer</h1>
        <p className='py-6 text-xl max-w-[70%] m-auto text-zinc-600 dark:text-cyan-50'>I am a dedicated individual with a strong foundation in Java, coupled with expertise in web development. My goal is to create seamless user experiences and elegant solutions driven by a constant desire for learning and innovation. I thrive in collaborative environments that allow me to contribute my technical expertise and dedication while learning from experienced developers. I&apos;m ready to contribute my skills to a dynamic team that values creativity and excellence.</p>
        
        <div className='p-6 flex max-w-[70%] m-auto justify-center items-center'>
            <a href="" aria-label='resume'>
              <h2 className='text-xl h-20 w-32 flex items-center border-indigo-600 border-2 p-3 rounded-3xl hover:scale-110 duration-300 hover:shadow-xl hover:shadow-indigo-500 hover:bg-zinc-900 hover:text-cyan-50 dark:hover:bg-stone-300 dark:hover:text-zinc-900 transition-all ease-in-out '>View my Resume</h2>
            </a>
            <a href="#contact" aria-label='contact me'>
              <h2 className='text-xl h-20 w-32 flex items-center border-indigo-600 border-2 p-3 ml-4 rounded-3xl hover:scale-110 duration-300 hover:shadow-xl hover:shadow-indigo-500 hover:bg-zinc-900 hover:text-cyan-50 dark:hover:bg-stone-300 dark:hover:text-zinc-900 transition-all ease-in-out '>Contact me</h2>
            </a>
        </div>
    </section>
  )
}

export default Intro