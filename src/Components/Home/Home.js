import React from "react";
import { Typewriter } from "react-simple-typewriter";
import photo from "../../Assets/sami.png";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container m-auto ">
      <div className=" animate__animated animate__fadeIn ">
        <div id="home" className="hero min-h-screen  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={photo}
              className="w-full border-b animate__animated animate__zoomIn max-w-sm animate__pulse  p-"
            />
            <div className="max-w-96">
              <h2 className="text-xl  font-thin text-white    py-2 ">
                Hey,
              </h2>
              <span className="text-5xl font-thin">I'm Samiul Alim</span>
              <span className="text-2xl ">
                {" "}
                _
                <Typewriter
                  words={[" Full Stack S/W Engineer"]}
                  loop={false}
                  deleteSpeed={130}
                  typeSpeed={150}
                  delaySpeed={2500}
                />
              </span>
              <p className="py-6  text-white ">
                {" "}
                a dynamic Full Stack Software Engineer and a passionate Shopify
                Developer at Devs Nest LLC. With a solid foundation in Computer
                Science, my expertise spans across cutting-edge technologies
                including React, Remix, Next.js, and a suite of backend tools
                like Express.js, REST, GraphQL, and databases such as PostgreSQL
                and MongoDB. My proficiency with AWS, Docker, and CI/CD
                pipelines empowers me to craft robust and scalable web
                solutions. As a developer with a keen interest in generative AI
                and machine learning, I am dedicated to exploring the synergy
                between AI and software development to pioneer innovative
                solutions. My portfolio is a testament to my commitment to
                excellence and my journey in pushing the boundaries of
                technology to create impactful user experiences.
              </p>
              <a
                href="https://drive.google.com/file/d/1r_o8IjwwwaiD7FDsCgBGRKRcKGkPSauN/view"
                className=" btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  btn-primary text-white glass rounded-none font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
    </div>
  );
};

export default Home;
