import React, { lazy, Suspense, useEffect, useState ,Provider} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "./Components/Body";
import Header from "./Components/Header";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestrauMenu from "./Components/RestrauMenu";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "../utils/AppStore";
import Cart from "./Components/Cart";

// Correct import for createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));



// Lazy loading Grocery component
const Grocery = lazy(() => import("./Components/Grocery") );

const About= lazy(()=> import("./Components/About"));

const App = () => {

    const [userName, setUserName]=useState("S");
     

        useEffect(()=>{

    //assume after api call we get data
        const data={ name: "saurabh"}
        setUserName(data.name); },[])

    return (
                    //Provider=>  redux store ka access jahan bhi dena h, use Provider se wrap kar do
        <Provider store={AppStore}>      
        
            <UserContext.Provider value={{loggedInUser:userName , setUserName}} > 
                <div className="App">
                <Header />  
                <Outlet />
                </div>
            </UserContext.Provider>

        </Provider>
        
    );
};

// Define your routing structure
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about",
                 element:( <Suspense fallback={<div>Loading...</div>}>  <About /> </Suspense> )
                 },
            { path: "/contact", element: <Contact /> },
            { path: "/restaurant/:resID", element: <RestrauMenu /> },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
        ],
        // Error handling route
        errorElement: <Error />,
    },
]);

// Render the application with RouterProvider
root.render(<RouterProvider router={appRouter} />);
