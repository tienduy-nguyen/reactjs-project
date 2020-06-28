import React from 'react';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Products from './components/products';
import Login from './components/login';
import NotFound from './components/notFound';

const routes = [
    {
        path: '/',
        exact :true,
        main: () => <Home></Home>
    },
    {
        path: '/about',
        exact :true,
        main: () => <About></About>
    },
    {
        path: '/contact',
        exact :true,
        main: () => <Contact></Contact>
    },
    {
        path: '/products',
        exact :false,
        main: ({match, location}) => <Products match = {match} location ={location}></Products>
    },
    {
        path: '/login',
        exact :true,
        main: ({location}) => <Login location = {location}></Login>
    },
    {
        path: '',
        exact :false,
        main: () => <NotFound></NotFound>
    }
]

export default routes;