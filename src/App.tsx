//import { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import { HashRouter as  Router, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavBar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Router>
        <NavBar />
        <div className="container m-auto">
          <Routes>
            <Route path="/" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        </Router>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
