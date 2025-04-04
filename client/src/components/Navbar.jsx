// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Thay Link bằng NavLink
import { useAuth } from '../context/AuthContext';
import '../css/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert('Bạn đã đăng xuất!');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Food<span>Paradise</span></NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                {user?.role === 'admin' && (
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                      to="/admin"
                    >
                      Admin
                    </NavLink>
                  </li>
                )}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    <li>
                      <NavLink className="dropdown-item" to="/profile">Hồ sơ</NavLink>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Đăng xuất
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    to="/login"
                  >
                    Đăng nhập
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    to="/register"
                  >
                    Đăng ký
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/search"
              >
                <i className="fas fa-search"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;