import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "./Components/Body";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestrauMenu from "./Components/RestrauMenu";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resID",
                element: <RestrauMenu/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
