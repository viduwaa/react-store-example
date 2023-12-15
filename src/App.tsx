//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { NavBar } from "./components/Navbar";

function App() {
    return (
        <>
            <NavBar />
            <div className="container m-auto">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/store" element={<Store />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
