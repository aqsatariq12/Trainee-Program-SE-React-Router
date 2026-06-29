import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import { ProductDetail } from "./ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
