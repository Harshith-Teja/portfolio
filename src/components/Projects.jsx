import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  return (
    <article className='max-w-[80%] m-auto mt-12 flex flex-col gap-8 text-zinc-900 dark:text-cyan-50'>
        <h1 className='md:flex md:justify-start font-bold text-4xl items-start'>My projects</h1>
        <div className='flex flex-col gap-8 lg:grid lg:grid-cols-3'>
            <section className='w-auto h-90 rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900 hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500'>
                <div className="flex justify-center items-center">
                    <h2 className='text-2xl p-4 font-semibold'>Baby Feed Web App</h2>
                    <a href="https://baby-feed-web-app.onrender.com" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </div>
                <p className='text-xl p-4'>A MERN stack application that provides curated dietary recommendations and feeding guidelines for infants based on user input such as age and weight. Implemented responsive design using Tailwind CSS to ensure an optimal user experience across devices</p>
            </section>
            <section className='w-auto h-90 rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900  hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500'>
                <div className="flex justify-center items-center">
                    <h2 className='text-2xl p-4 font-semibold'>Movies Web App</h2>
                    <a href="https://movie-api-react-frontend.onrender.com" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </div>
                <p className='text-xl p-4'>A web application featuring a movie carousel with clickable trailers that enables users to watch trailers and post reviews. Integrated a React frontend with a Java Spring Boot backend that allows users to read and share reviews of movies, enhancing user engagement and interaction. </p>
            </section>
            <section className='w-auto h-90 rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900  hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500'>
                <div className="flex justify-center items-center">
                    <h2 className='text-2xl p-4 font-semibold'>Tech Notes Web App</h2>
                    <a href="https://tech-notes-frontend-jf5c.onrender.com" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </div>
                <p className='text-xl p-4'>A responsive MERN stack application for a tech repair shop utilizing React-Redux for state management. This app allows managers and employees to create, read, update, and delete work notes with features including task assignment, completion tracking, and user management enhancing workflow efficiency and accountability. </p>
            </section>
        </div>
    </article>
  )
}

export default Projects