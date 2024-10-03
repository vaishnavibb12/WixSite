import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../CSS/Navbar.css";
import { FaUser } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const [errors, setErrors] = useState({});
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "") {
      alert("Enter Email");
    } else if (formData.password === "") {
      alert("Please Enter Password");
    } else {
      toast.success("Success Notification");
    }
  };

  console.log(formData);

  return (
    <header className="header">
      <nav className="nav container-xl">
        <NavLink to="/" className="nav__logo">
          Buzzthrough
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/aboutus"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Speckers
              </NavLink>
            </li>
            <li className="nav__item fr">
              <NavLink
                to="/about-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Topics
              </NavLink>
              <ul className="sub-dropdown">
                <li>Hot</li>
                <li>Cold</li>
              </ul>
            </li>

            <li className="nav__item gh">
              <NavLink
                to="/location"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Log In
                <FaUser />
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            onClick={handleOpenForm}
            class="btn btn-primary"
          >
            Sign Up
          </button>
          {isFormOpen && (
            <div className="form-container">
              <div className="form-content">
                <div className="login-container">
                  <div className="login-box">
                    <h2>Log In</h2>{" "}
                    <button onClick={handleCloseForm}>
                      {" "}
                      <MdOutlineClose />
                    </button>
                    <div className="social-login">
                      <button className="social-btn google">
                        <FaGoogle /> Google
                      </button>
                      <button className="social-btn facebook">
                        <FaFacebook /> Facebook
                      </button>
                      <button className="social-btn github">
                        <FaGithub /> Github
                      </button>
                      <button className="social-btn feide">
                        <MdSecurity /> Feide
                      </button>
                    </div>
                    {/* <p>OR</p> */}
                    <form onSubmit={handleSubmit} method="POST">
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        required
                      />
                      <button type="submit" className="login-btn">
                        Login
                      </button>
                      <ToastContainer />
                    </form>
                    <p className="forgot-password">Forgot Password?</p>
                  </div>

                  <div className="signup-prompt">
                    Don't have an account? <a href="#">Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
