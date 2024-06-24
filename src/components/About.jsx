
const About = () => {
  return (
    <article className="flex flex-col gap-4 text-zinc-800 dark:text-cyan-50 max-w-[80%] m-auto mt-8 ">
        <h1 className="md:flex md:justify-start text-4xl font-bold items-start">About Me</h1>
        <div className="flex flex-col gap-4 mt-4 items-center md:grid md:grid-cols-5">
            <img src='../../pfp/my_pfp1.jpg' alt="my profile pic" className="object-top object-cover h-64 w-64 rounded-full border-2 border-zinc-700 dark:border-cyan-50 md:col-span-2 "/>
            <section className="py-4 md:col-span-3 text-xl font-semibold text-zinc-600 dark:text-cyan-50">
                <p>
                  I am a software developer with a passion for web development. I took my undergraduate degree from Sastra Deemed University in B.Tech - Computer Science. I have always held a strong intrest in technology and my passion for tech is always growing.
                </p>
                <p className="mt-4">
                  Now, I'm actively building projects using React.js, Redux, Nodejs, express and MongoDB. I find joy in creating dynamic and responsive web applications. I love solving new problems and embracing new challenges everyday constantly seeking to enhance my skills and deliver innovative solutions.
                </p>
            </section>
        </div>
    </article>
  )
}

export default About