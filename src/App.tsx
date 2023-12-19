//import { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import { HashRouter as  Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavBar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <div className="container m-auto">
          <Routes>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
