import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillBriefcaseFill,
  BsReverseLayoutSidebarReverse,
  BsFillBookFill,
  BsCircleFill,
  BsBuilding,
  BsClockFill,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="container m-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="grid grid-cols-1 md:grid-cols-2 animate__fadeIn animate__animated">
          <div className="hero-content text-left">
            <div className="max-w-md">
              <h1 className="text-5xl font-light">As a</h1>
              <p className="py-6">
                seasoned Full Stack Software Engineer and Computer Science
                graduate, I bring a wealth of experience in developing scalable,
                high-performance web applications. My technical toolkit is
                extensive, encompassing modern JavaScript frameworks like <strong>React</strong>,
                <strong> Remix</strong>, and <strong>Next.js</strong>, as well as backend technologies such as
                <strong> Express.js</strong>, RESTful APIs, GraphQL, and databases including
                <strong> PostgreSQL</strong>, <strong>MongoDB</strong> (via Mongoose), <strong>DynamoDB</strong>, and <strong>Prisma</strong>. My
                proficiency with <strong>AWS</strong>, <strong>Heroku</strong>, <strong>Docker</strong>, and CI/CD practices using
                <strong> GitHub Actions</strong>, coupled with scripting skills in Bash and
                development experience in <strong>Flutter</strong>, enables me to build and
                maintain robust development pipelines.
                <br /> <br /> Currently, I am honing my skills as a Shopify
                Developer at <strong>Devs Nest LLC</strong>, where I focus on creating custom
                e-commerce solutions that enhance user engagement and drive
                business growth. My passion for generative AI and machine
                learning fuels my pursuit of innovative approaches to software
                development, as I explore the intersection of AI technologies
                and programming to push the boundaries of what’s possible.
              </p>
            </div>
          </div>
          <div className="hero-content text-left">
            <div className="max-w-md">
              <div className="p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Technical Proficiencies:</h2>
                <ul className="list-disc list-inside">
                  <li>
                    Full Stack Development with HTML, JavaScript, CSS,
                    Bootstrap, Tailwind, Material UI, DaisyUI, <strong>ReactJS</strong>.
                  </li>
                  <li>
                    Back-end development with <strong>ExpressJS</strong>, <strong>NodeJS</strong>, and databases
                    like <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>Prisma</strong>, <strong>DynamoDB</strong>, <strong>Mongoose</strong>.
                  </li>
                  <li>
                    Deployment on <strong>AWS</strong>, <strong>Heroku</strong>; containerization with <strong>Docker</strong>.
                  </li>
                  <li>
                    CI/CD pipelines with <strong>GitHub Actions</strong>; automation with <strong>Bash</strong>
                    scripting.
                  </li>
                  <li>Mobile app development with <strong>Flutter</strong>.</li>
                  <li>
                    Version control and project management with <strong>Git</strong> and <strong>GitHub</strong>.
                  </li>
                </ul>
                <h2 className="text-2xl font-bold mt-4 mb-2">Software Engineering Capabilities:</h2>
                <p>
                  Analysis of software requirements, designing unit tests,
                  troubleshooting, and problem-solving.
                </p>
                <h2 className="text-2xl font-bold mt-4 mb-2">Communication & Collaboration:</h2>
                <p>
                  Strong interpersonal skills, effective collaboration, and user
                  feedback interpretation.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-content text-left">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Experience</h1>
               {/* New Job Experience */}
               <div className="py-6">
                <div className="w-full">
                  <div className="flex items-center">
                    <BsBuilding />
                    <p className="px-2 font-bold">Devs Nest LLC</p>
                  </div>
                  <div className="w-full flex items-center justify-start">
                    <BsFillBriefcaseFill />
                    <p className="px-2 font-bold">Junior Software Engineer</p>
                  </div>
                  <div className="flex items-center">
                    <BsClockFill />
                    <p className="px-2">June 2023 - Present</p>
                  </div>
                  <div className="">
                    <p className="px-2 text-sm">
                      Describe your responsibilities and achievements here.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <div className="w-full">
                  <div className="flex items-center">
                    <BsBuilding />
                    <p className="px-2 font-bold">Zays || zaysbd.com</p>
                  </div>
                  <div className="w-full flex items-center justify-start">
                    <BsFillBriefcaseFill />
                    <p className="px-2">Web Developer</p>
                  </div>
                  <div className="flex items-center">
                    <BsClockFill />
                    <p className="px-2">Current Workplace</p>
                  </div>
                  <div className="">
                    <p className="px-2 text-sm">
                      Developed and managed the Shopify store. Worked on
                      marketing campaigns for brands. Handled multiple digital
                      accounts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-6">
                <div className="w-full">
                  <div className="flex items-center">
                    <BsBuilding />
                    <p className="px-2 font-bold">
                      Mars Solutions Ltd. || mars.com.bd
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start">
                    <BsFillBriefcaseFill />
                    <p className="px-2">Programming Instructor</p>
                  </div>
                  <div className="flex items-center">
                    <BsClockFill />
                    <p className="px-2">October 2021 - July 2022</p>
                  </div>
                  <div className="">
                    <p className="px-2 text-sm">
                      Producing unique problem-solving ideas. Working closely
                      with the training team.
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
            {/* education */}
          </div>
          <div className="hero-content text-left">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Education</h1>
              <div className="py-6">
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <BsFillBookFill />
                    <p className="px-2 font-bold">Bsc in Computer Science</p>
                  </div>
                  <div className="w-full flex items-center justify-start">
                    <BsReverseLayoutSidebarReverse />
                    <p className="px-2">Tejgaon College Dhaka</p>
                  </div>
                  <div className="flex items-center">
                    <BsClockFill />
                    <p className="px-2">2018 - 2022</p>
                  </div>
                  <p>
                    Tejgaon College, Dhaka is a college in Dhaka city,
                    Bangladesh which was founded in 1961. It has 30,000
                    students. Tejgaon College is located at Farmgate, at the
                    Dhaka city centre. It had started off as a night college in
                    a school campus at Sadarghat
                  </p>
                </div>
              </div>
            </div>
            {/* education */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
