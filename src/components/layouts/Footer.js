import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-around MonumentExtended InspireInnovateBuildSec">
            <h1>Inspire</h1>
            <span class="fa fa-star checked"></span>
            <h1>Innovate</h1>
            <span class="fa fa-star checked"></span>
            <h1>Build</h1>
          </div>
        </div>
        <div className="row text-center align-items-center my-5">
          <div className="col-lg-5 bar"></div>
          <div className="col-lg-2 p-0">
            <span class="fa fa-star checked barStar"></span>
          <img src="images/sparkler.svg" alt="Dropify Tech Team" />


          </div>
          <div className="col-lg-5 bar"></div>
        </div>
        <div className="row">
          <div className=".col-lg-12 p-0">
          <img src="images/dropify-tech-team.jpg" className="w-100 footer2ndlastSecImg" alt="Dropify Tech Team" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <p className="Archivo text-center my-3 pb-3">Finding the right talent for your business can be a daunting task. Let us take the guesswork out of the process and help you find the perfect fit for your business</p>
            <div className="HireUsSec my-5">
              <div className="hireUsBtn">
                <span>Hire Us</span>
              </div>
              <div>
                <span>Book Consulatation</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>        
      </div>


      <div className="container-fluid footer-main-sec px-5">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center flex-column" style={{ gap: "20px" }}>
            <img src="/images/logo1.png" alt="dropify-tech-logo" style={{ width: "128.91px", height: "118.01px" }} />
            <ul className="footer-links">
              <li>
                <NavLink to="/services">
                  <i className="fa-brands fa-youtube"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="fa-brands fa-linkedin"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="fa-brands fa-x-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="fa-brands fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="fa-brands fa-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <i className="fa-brands fa-tiktok"></i>
                </NavLink>
              </li>
            </ul>

            <div className="d-flex">
              <div>
                <img src="/images/discover.png" className="mb-5" alt="dropify-tech-logo" style={{ width: "76px", height: "24px" }} />
              </div>
              <div>
                <img src="/images/visa.png" className="mb-5" alt="dropify-tech-logo" style={{ width: "76px", height: "24px" }} />
              </div>
              <div>
                <img src="/images/discover.png" className="mb-5" alt="dropify-tech-logo" style={{ width: "76px", height: "24px" }} />
              </div>
              <div>
                <img src="/images/visa.png" className="mb-5" alt="dropify-tech-logo" style={{ width: "76px", height: "24px" }} />
              </div>
            </div>
          </div>
          <div className="col-lg-8 footer2ndSec my-5 p-3">
            <div className="d-flex justify-content-around">
              <div>
                <h6 className="text-light m-0 footer-titles pb-3">Useful Links</h6>
                <ul className="UsefulLinksSec">
                  <li className="py-2">
                    <NavLink to="/services">
                      Home
                    </NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to="/services">
                      About Us
                    </NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to="/services">
                      Blogs
                    </NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to="/services">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="text-light m-0 footer-titles pb-3">Our Services</h6>
                <ul className="UsefulLinksSec">
                  <li className="py-2">
                    <NavLink to="/services">
                      Ecommerce
                    </NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to="/services">
                      Digital Marketing
                    </NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to="/services">
                      Branding
                    </NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to="/services">
                      Development
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="text-light m-0 footer-titles pb-3">Find Us</h6>
                <div className="d-flex flex-column">
                  <div className="py-2 d-flex footerFindUs">
                    <div>
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <p>
                        XYZ Business Center
                        Paulo Alto 12424 California
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="pb-2 d-flex footerFindUs">
                    <div><i class="fa-solid fa-phone"></i></div>
                    <div><p>(001) 315 65 053</p></div>
                  </div>
                  <div className="pb-2 d-flex footerFindUs">
                    <div><i class="fa-solid fa-envelope"></i></div>
                    <div><p>info@dropifytech.com</p></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row footerEnd py-3">
          <div className="col-lg-6 text-start">
            <p>© 2024 Dropifytech. All rights reserved.</p>
          </div>
          <div className="col-lg-6 text-end">
            <p>Privacy Policey | Imprints</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;