import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid mainSec">
        <div className="conatiner px-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-3 col-12 text-center">
              <img src="/images/logo1.png" alt="dropify-tech-logo" style={{ width: "128.91px", height: "118.01px" }} />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ul className="navbarList">
                <li>
                  <NavLink to="/" className="">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className="">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs" className="">
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-12 text-center contactUsBtn">
              <button className="btn btn-lg">
                <NavLink to="/contact" className="text-dark text-decoration-none Archivo">
                  Contact Us
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;