import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestraurantMenu from './components/RestaurantMenu';
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - RestaurantContainer
 *      - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *  - Social Links 
 */

/**
 * Inline CSS can be used to style individual components 
 *  This is not recommended for large applications as it can lead to code that is hard to maintain and read.
*/





const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "restaurants/:id", element: <RestraurantMenu /> }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);