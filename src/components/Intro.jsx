import React from "react";

const Intro = () => {
  return (
    <section className="mt-8 text-5xl text-zinc-800 dark:text-cyan-50 font-semibold">
      <h1 className="p-4">
        Hi, I'm
        <span className="text-indigo-600"> Harshith Teja</span>
      </h1>
      <h1 className="p-4">An aspiring Software Developer</h1>
      <p className="py-6 text-xl max-w-[70%] m-auto text-zinc-600 dark:text-cyan-50">
        I love situations where software development meets problem-solving. With
        hands-on experience in building full-stack web applications, I
        specialize in React.js, TypeScript, JavaScript, Node.js, Express, Redux,
        Tailwind, and MongoDB—and I'm always eager to learn new technologies as
        needed.
      </p>
      <p className="py-6 text-xl max-w-[70%] m-auto text-zinc-600 dark:text-cyan-50">
        Currently working in a service-based company, I am driven by a strong
        desire to transition into product-based companies where I can contribute
        to and learn from cutting-edge software development practices. My
        passion lies in understanding how large-scale systems are built,
        deployed, maintained, and scaled to serve millions of users worldwide.
      </p>
      <p className="py-6 text-xl max-w-[70%] m-auto text-zinc-600 dark:text-cyan-50">
        Beyond development, I continuously refine my DSA skills and explore
        advanced concepts in web development to deepen my expertise. I firmly
        believe in learning by building, and I push myself every day to improve,
        tackle challenges, and grow as a software engineer. Looking to connect
        with like-minded engineers, mentors, and teams building impactful
        software at scale. Let’s build something great!
      </p>

      <div className="p-6 flex max-w-[70%] m-auto justify-center items-center">
        <a
          href="https://drive.google.com/file/d/14xaorvndWsDF0MK8vqDt8DOy_n04Hd35/view?usp=sharing"
          target="_blank"
          aria-label="resume"
        >
          <h2 className="text-xl h-20 w-32 flex items-center border-indigo-600 border-2 p-3 rounded-3xl hover:scale-110 duration-300 hover:shadow-xl hover:shadow-indigo-500 hover:bg-zinc-900 hover:text-cyan-50 dark:hover:bg-stone-300 dark:hover:text-zinc-900 transition-all ease-in-out ">
            View my Resume
          </h2>
        </a>
        <a href="#contact" aria-label="contact me">
          <h2 className="text-xl h-20 w-32 flex items-center border-indigo-600 border-2 p-3 ml-4 rounded-3xl hover:scale-110 duration-300 hover:shadow-xl hover:shadow-indigo-500 hover:bg-zinc-900 hover:text-cyan-50 dark:hover:bg-stone-300 dark:hover:text-zinc-900 transition-all ease-in-out ">
            Contact me
          </h2>
        </a>
      </div>
    </section>
  );
};

export default Intro;
