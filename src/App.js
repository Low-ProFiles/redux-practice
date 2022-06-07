import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/routes/Home";
import Detail from "../src/routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:id" element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;