const heading= React.createElement("h1", {}, "Hello world from React");

        const root= ReactDOM.createRoot(document.getElementById("root"));


        //render creates html element from object of heading
        //render also puts that element in DOM
        
        root.render(heading);