import React from 'react'

const Contact = () => {
  return (
    <article className='flex flex-col gap-8 max-w-[80%] m-auto mt-12 text-zinc-900 dark:text-cyan-50'>
        <h1 className='md:flex md:justify-start text-4xl font-bold'>Contact Me</h1>
        <h2 className='text-3xl font-semibold'>GET IN TOUCH</h2>
        <div className='flex gap-8 justify-center items-center'>
            <a href="mailto:harshithtejadontoju@gmail.com" target='_blank' aria-label='emailId'>
                <img src="../../public/contact Logos/Email-Logo.png" alt="EmailId" className='h-12 w-12 rounded-full object-contain hover:scale-110 transition-all duration-200 ease-in'/>
                <p className='text-lg'>email</p>
            </a>
            <a href="https://www.linkedin.com/in/harshith-teja-98ab5624b/" target='_blank' aria-label='LinkedIn'>
                <img src="../../public/contact Logos/Linkedin_Logo.png" alt="LinkedIn" className='h-12 w-16 rounded-full object-contain hover:scale-110 transition-all duration-200 ease-in'/>
                <p className='text-lg'>LinkedIn</p>
            </a>
            <a href="https://github.com/Harshith-Teja" target='_blank' aria-label='Github'>
                <img src="../../public/contact Logos/Github-Logo.png" alt="Github" className='h-12 w-20 rounded-full object-contain hover:scale-110 transition-all duration-200 ease-in'/>
                <p className='text-lg'>Github</p>
            </a>
            <a href="https://leetcode.com/u/harshithtejadontoju/" target='_blank' aria-label='Leetcode'>
                <img src="../../public/contact Logos/Leetcode-Logo.webp" alt="Leetcode" className='h-12 w-12 rounded-full object-contain hover:scale-110 transition-all duration-200 ease-in'/>
                <p className='text-lg'>Leetcode</p>
            </a>
        </div>
    </article>
  )
}

export default Contact