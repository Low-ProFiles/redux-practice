import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/routes/Home";
import Detail from "../src/routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home}></Route>
            <Route path="/:id" component={Detail}></Route>
        </BrowserRouter>
    );
}

export default App;