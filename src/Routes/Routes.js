import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import Projects from '../Components/Home/Projects';
import Main from '../Components/Layout/Main';
import NotFound from '../Components/NotFound/NotFound';
import Comps from '../Components/comps/Comps';


const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/' ,
                
                element:<Home></Home>
            },
            {
                path: '/projects',
                element:<Projects></Projects>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            
        ]
    },
    
    
])

export default routes;