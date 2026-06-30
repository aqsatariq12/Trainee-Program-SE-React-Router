import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import AppLayout from "./AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "./AuthLayout";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route>
          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
