import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
function AuthLayout (){
  return (
    <div className="auth-layout">
        <nav className="navbar">
      <h2 className="logo">ReactShop</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </div>
    </nav>
        <Outlet/>
    </div>
  )
}

export default AuthLayout;