import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <article className="max-w-[80%] m-auto mt-12 flex flex-col gap-8 text-zinc-900 dark:text-cyan-50">
      <h1 className="md:flex md:justify-start font-bold text-4xl items-start">
        My projects
      </h1>
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
        <section className="w-full px-8 pb-4 h-auto rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900  hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500">
          <div className="flex justify-center items-center gap-2 p-4">
            <h2 className="text-2xl font-semibold">Blog Smith</h2>
            <a href="https://blog-smith-fe.onrender.com" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <ul className="list-disc text-left">
            <li>
              Built a full-stack blog application where users can write and
              share blogs on topics like programming, finance, travel, and more.
            </li>
            <li>
              Implemented Gmail OAuth to get data from user’s repositories.
            </li>
            <li>
              Used Json Web tokens(JWT) for authentication & authorization.
            </li>
            <li>
              Developed a dashboard to track post’s performance by visualizing
              likes, comments, posts in total and from the past month to
              understand audience engagement.
            </li>
            <li>
              Features include: Search functionality, profile updates, dark
              mode, responsive design.
            </li>
          </ul>
        </section>
        <section className="w-full px-8 pb-4 h-auto rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900  hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500">
          <div className="flex justify-center items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">Tech Notes Web App</h2>
            <a
              href="https://tech-notes-frontend-jf5c.onrender.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <ul className="list-disc text-left">
            <li>
              Developed a responsive full-stack web application for keeping
              track of work notes in a tech repair shop.
            </li>
            <li>
              Allows managers and employees to create, read, update, and delete
              work notes.
            </li>
            <li>
              Features include task management, completion tracking, and user
              management.
            </li>
            <li>
              Implemented Json Web tokens(JWT) for authentication &
              authorization.
            </li>
            <li> Enhances workflow efficiency and accountability. </li>
          </ul>
        </section>
        <section className="w-full px-8 pb-4 h-auto rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900 hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500">
          <div className="flex justify-center items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">Baby Feed Web App</h2>
            <a href="https://baby-feed-web-app.onrender.com" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <ul className="list-disc text-left">
            <li>
              Created a React application that curates dietary recommendations
              and feeding guidelines to infants based on user input such as age
              & weight.
            </li>
            <li> Implemented a responsive design using Tailwind. </li>
            <li>
              Allows parents to easily find out the feeding suggestions based on
              age & weight of the baby.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default Projects;
