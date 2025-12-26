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
          <h2 className="text-sm font-medium mb-2 border-black border-2 rounded-lg p-2">
            React, Typescript, Express, Redux, Mongodb, Tailwind CSS
          </h2>
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

        <section className="w-full px-8 pb-4 h-auto rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900 hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500">
          <div className="flex justify-center items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">Hola Chat App</h2>
            <a href="https://hola-chat-9o30.onrender.com/" target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <h2 className="text-sm font-medium mb-2 border-black border-2 rounded-lg p-2">
            React, Express, Node, Zustand, Mongodb, Tailwind CSS
          </h2>
          <ul className="list-disc text-left">
            <li>
              Developed a modern, real-time chat application supporting direct
              messages and channel-based communication.
            </li>
            <li>
              Integrated Socket.io for bi-directional real-time communication,
              enabling instant message delivery and live chat updates.
            </li>
            <li>
              Implemented global state management using Zustand to efficiently
              handle user sessions, chat selection, message history, and file
              transfer states.
            </li>
            <li>
              Developed features like file upload/download with progress
              tracking, intelligent message rendering by chat type (DM vs
              Channel), and keyboard event handling.
            </li>
          </ul>
        </section>

        <section className="w-full px-8 pb-4 h-auto rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900  hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500">
          <div className="flex justify-center items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">Patient Management</h2>
            <a
              href="https://github.com/Harshith-Teja/Patient-Management-System"
              target="_blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <h2 className="text-sm font-medium mb-2 border-black border-2 rounded-lg p-2">
            Spring Boot, Docker, Kafka, Postgresql, Hibernate, Microservices
          </h2>
          <ul className="list-disc text-left">
            <li>
              Developed a microservices-based Patient Management System with
              patient, billing, auth, analytics, and API gateway services.
            </li>
            <li>
              Implemented REST APIs for client communication, gRPC with Protocol
              Buffers for fast service-to-service calls, and Kafka for
              event-driven analytics.
            </li>
            <li>
              Secured services using Spring Security, JWT authentication, and
              API Gateway for route protection against unauthorized access.
            </li>
            <li>
              Used Postgres + Hibernate for data persistence, Swagger for api
              documentation, and wrote integration tests for jwt token
              validation to protect other routes.
            </li>
            <li>
              Containerized services with Docker for deployment and scalability.
            </li>
          </ul>
        </section>
        <section className="w-full px-8 pb-4 col-start-2 h-auto rounded-3xl bg-zinc-700 text-cyan-50 dark:bg-stone-200 dark:text-zinc-900  hover:scale-105 transition-all ease-in-out duration-300 hover:border-4 hover:border-indigo-500 hover:shadow-2xl hover:shadow-violet-500">
          <div className="flex justify-center items-center gap-1 p-4">
            <h2 className="text-2xl font-semibold">Tech Notes Web App</h2>
            <a
              href="https://tech-notes-frontend-jf5c.onrender.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <h2 className="text-sm font-medium mb-2 border-black border-2 rounded-lg p-2">
            React, Express, Node, Mongodb, Redux
          </h2>
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
      </div>
    </article>
  );
};

export default Projects;
