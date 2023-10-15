import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import photo from '../../Assets/sami.png'
import Projects from './Projects';


const Home = () => {
    return (
        <div className='container m-auto '>
            <div className=" animate__animated animate__fadeIn ">
                <div id='home' className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img  alt='' src={photo} className="w-full border-b animate__animated animate__zoomIn max-w-sm animate__pulse  p-" />
                        <div className='max-w-96'>
                            <h2 className="text-xl  font-thin text-white    py-2 ">Hey, I'm Samiul</h2>
                            <span className="text-5xl font-thin">I'm Samiul Alim</span>
                            <span className="text-2xl "> _
                                <Typewriter
                                    words={[' MERN Stack Developer',]}
                                    loop={false}
                                    deleteSpeed={130}
                                    typeSpeed={150}
                                    delaySpeed={2500}

                                />
                            </span>
                            <p className="py-6  text-white ">Full Stack Web Developer with 1 year of experience in JavaScript, HTML5, CSS3, and ReactJS. Proven
                                capability to produce enterprise-level projects grounded on the conditions and have done several projects. I
                                am utterly passionate about the rearmost technology.
                            </p>
                            <a href='https://drive.google.com/file/d/1r_o8IjwwwaiD7FDsCgBGRKRcKGkPSauN/view' className=" btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  btn-primary text-white glass rounded-none font-medium">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* projects */}


        </div>

    );
};

export default Home;