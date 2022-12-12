import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBriefcaseFill, BsReverseLayoutSidebarReverse, BsFillBookFill, BsCircleFill, BsBuilding, BsClockFill } from "react-icons/bs";

const About = () => {
    return (
        <div className='container m-auto'>
            <div className="hero min-h-screen  bg-base-200 ">
                <div className="grid grid-cols-1 md:grid-cols-2 animate__fadeIn animate__animated">

                    <div className="hero-content text-left">
                        <div className="max-w-md">
                            <h1 className=" text-5xl font-light">I am</h1>
                            <p className="py-6">Experienced Web Developer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
                                <br /> <br /> Skilled leader who has the proven ability to motivate, educate and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight its core competencies, and further its success.

                            </p>

                        </div>
                    </div>
                    <div className="hero-content text-left">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold">Skills</h1>
                            <p className="py-6">
                                Well-versed in software tools including <span className='text-xl font-light text-secondary'>
                                    HTML, JavaScript, CSS,Bootstrap, Tailwind, Material UI, DaisyUI, ReactJS, ExpressJS, NodeJS, MongoDB, JSON, JWT, Firebase.
                                </span>
                                <br /> <br />
                                Skilled at reading and writing code using viable inputs and outputs after an accurate assessment of pre- and post-conditions. <br /> <br />
                                Experienced at designing unit tests to measure the effectiveness of software programs, backend services and user interfaces.
                                Confident problem-solving abilities to overcome glitches with creative solutions that are strategically designed to last long-term.
                                <br /> <br />
                                Strong communication skills and the ability to listen carefully to user feedback to determine modifications for optimal user function.
                            </p>

                        </div>
                    </div>
                    <div className="hero-content text-left">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold">Experience</h1>
                            <div className="py-6">

                                <div className='   w-full'>
                                    <div className="flex items-center">
                                        <BsBuilding></BsBuilding> <p className='px-2  font-bold'>Zays || zaysbd.com
                                        </p>
                                    </div>
                                    <div className='w-full flex items-center jus justify-start'><BsFillBriefcaseFill /><p className='px-2'>Web Developer</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <BsClockFill></BsClockFill>
                                        <p className='px-2'>Current Workplace</p>
                                    </div>
                                    <div className=''>

                                        <p className='px-2 text-sm'>

                                            Developed and managed the Shopify store.
                                            Worked on marketing campaigns for brands.
                                            Handled multiple digital accounts.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="py-6">

                                <div className='   w-full'>
                                    <div className="flex items-center">
                                        <BsBuilding></BsBuilding> <p className='px-2  font-bold'>Mars Solutions Ltd. || mars.com.bd
                                        </p>
                                    </div>
                                    <div className='w-full flex items-center jus justify-start'><BsFillBriefcaseFill /><p className='px-2'>Programming Instructor</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <BsClockFill></BsClockFill>
                                        <p className='px-2'>October 2021 - July 2022
                                        </p>
                                    </div>
                                    <div className=''>

                                        <p className='px-2 text-sm'>
                                            Producing unique problem-solving ideas.
                                            Working closely with the training team.

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

                                <div className=' flex flex-col items-start  '>
                                    <div className="flex items-center">
                                        <BsFillBookFill></BsFillBookFill> <p className='px-2  font-bold'>Bsc in Computer Science</p>
                                    </div>
                                    <div className='w-full flex items-center jus justify-start'><BsReverseLayoutSidebarReverse /><p className='px-2'>Tejgaon College Dhaka</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <BsClockFill></BsClockFill>
                                        <p className='px-2'>2018 - 2022</p>
                                    </div>
                                    <p>
                                    Tejgaon College, Dhaka is a college in Dhaka city, Bangladesh which was founded in 1961. It has 30,000 students. Tejgaon College is located at Farmgate, at the Dhaka city centre. It had started off as a night college in a school campus at Sadarghat
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