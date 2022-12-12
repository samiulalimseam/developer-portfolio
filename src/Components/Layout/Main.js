import React from 'react';
import Particles from 'react-particles';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import { ParticleBG } from './ParticleBG';

const Main = () => {
    return (
        <div className='bg-gradient-to-r
        from-base-100
        via-indigo-900
        to-violet-800
        to-blue-900
        via-indigo-900
        background-animate'>
           <Navbar></Navbar> 
           <ParticleBG></ParticleBG>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;