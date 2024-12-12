import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';

import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import Community from './Pages/Community/Community';
import About from './Pages/About/About';
import Users from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import './global.css';
import ErrorPage from './Pages/Error/Error';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
};

async function loader({ params }) {
    try {
        const response = await fetch(`https://dummyjson.com/users/${params.userId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user data: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw new Response("User not found", { status: 404 });
    }
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Welcome />} />
            <Route path='community' element={<Community />} />
            <Route path='about' element={<About />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:userId' loader={loader} element={<UserPage />} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
