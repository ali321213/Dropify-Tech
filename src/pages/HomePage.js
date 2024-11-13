import React from "react";
import Layout from "./../components/layouts/Layout";
import { NavLink, Link } from "react-router-dom";
import 'animate.css';

const HomePage = () => {
  return (
    <div>
      <Layout title={'Home | Dropify Tech'}>
        <div className="container-fluid mainSec pt-5">
          <div className="row navbarSecText pt-5">
            <div className="col-lg-12 text-center pb-5">
              <h1 className="text-light mt-5 animate__animated animate__backInDown"><span className="highlight">Reimagine</span>Digital</h1>
              <h3 className="text-light py-3 animate__animated animate__backInDown">We elevate your presence</h3>
              <p className="text-light pb-5 mb-5 Archivo animate__animated animate__backInDown">Dropifytech is a dynamic and innovative  agency that brings exceptional ideas to life.  We works with a wide range of clients to develop unique and effective ecommerce, marketing, & branding solutions.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row headerCards animate__animated animate__fadeInUp">

            <div className="col-lg-3 col-md-3 col-3 ShopifyCard">
              <p className="py-2">Shopify</p>
              <img src="/images/cards3.png" className="w-100" alt="Shopify-Card - Dropify Tech" />
            </div>

            <div className="col-lg-3 col-md-3 col-3 AmazonCard">
              <p className="py-2">Amazon</p>
              <img src="/images/cards4.png" className="w-100" alt="Amazon-Card - Dropify Tech" />
            </div>

            <div className="col-lg-3 col-md-3 col-3 WalmartCard">
              <p className="py-2">Walmart</p>
              <img src="/images/cards2.png" className="w-100" alt="Walmart-Card - Dropify Tech" />
            </div>

            <div className="col-lg-3 col-md-3 col-3 TiktokCard">
              <p className="py-2">TikTok</p>
              <img src="/images/cards1.png" className="w-100" alt="Tiktok-Card - Dropify Tech" />
            </div>
          </div>
        </div>


        <div className="container my-5">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
              <h1 className="MonumentExtended text-capitalize" style={{ fontSize: "40px" }}>
                We are Digital thinkers. Ecommerce Starters & awesome marketer
              </h1>
              <img src="/images/team.jpg" className="team-img" alt="Dropify Tech Logo" />
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <h5 className="Archivo mb-4" style={{ fontSize: "20px" }}>
                Being a team, we believe that our experience gives us an advantage, allowing us to be nimble, adaptable, and able to work closely with our clients to deliver truly awesome projects.
              </h5>
              <img src="/images/dropify-tech_happy-client.jpg" className="mb-5 team-img" alt="Dropify Tech Logo" />
            </div>
          </div>

          {/* Our Services Section Start */}
          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-12">
              <h1 className="our-ser-sec-title MonumentExtended my-3">Our<span className="services">Services</span></h1>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-5 col-md-5 col-12">
              <p className="Archivo text-capitalize my-4">Dropifytech offers a range of digital services that are tailored to meet the unique needs of each client.</p>
              <ul className="our-service-sec-list">
                <li>
                  <a href="#"><span className="MonumentExtended px-2">01</span> E-Commerce</a>
                  <i class="fa-solid fa-arrow-right fs-3"></i>
                </li>
                <li>
                  <a href="#"><span className="MonumentExtended px-2">02</span> Digital Marketing</a>
                  <i class="fa-solid fa-arrow-right fs-3"></i>
                </li>
                <li>
                  <a href="#"><span className="MonumentExtended px-2">03</span> Branding</a>
                  <i class="fa-solid fa-arrow-right fs-3"></i>
                </li>
                <li>
                  <a href="#"><span className="MonumentExtended px-2">04</span> Development</a>
                  <i class="fa-solid fa-arrow-right fs-3"></i>
                </li>
              </ul>
            </div>

            <div className="col-lg-7 col-md-7 col-12 d-flex" style={{ gap: "10px" }}>
              <div>
                <img src="./images/dropify-tech_happy-service-sec.jpg" className="ourSerSecImg" alt="Dropify Tech Service" />
              </div>
              <div className="d-flex flex-column" style={{ gap: "20px" }}>
                <div className="text-light ourSer2ndSec">
                  <div>
                    <p className="Archivo">
                      Dive into our advance Ecommerce learning
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="Archivo exploreMore m-0">Explore More</p>
                    <i class="fa-solid fa-arrow-right fs-3 rotateArrow"></i>
                  </div>
                </div>
                <div className="text-light ourSer2ndSec1">
                  <div>
                    <p className="Archivo">
                      Looking for ecommerce experts service we can bring your vision to life?
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="Archivo exploreMore text-dark m-0">Get our Service</p>
                    <i class="fa-solid fa-arrow-right fs-3 rotateArrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Services Section End */}
        </div>


        {/* How Our Magical Process Works Section Start*/}
        <div className="container-fluid ProcessingTitle py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 text-center pb-5">
                <h1 className="MonumentExtended">How Our Magical Process<span className="works">Works</span></h1>
                <h6 className="fw-normal ProcessingSecText">Dropifytech follows a collaborative and iterative approach, with a focus on understanding and meeting the unique needs of each client.
                </h6>
              </div>
            </div>

            <div className="row pb-5">
              <div className="d-flex" style={{ gap: "40px" }}>
                <div className="col-lg-6 col-md-6 col-6 ProcessingSec">
                  <h2 className="py-3 MonumentExtended numbering">01</h2>
                  <img src="/images/team.jpg" alt="Dropify Tech Processing Scheme Strategy" />
                  <h3 className="MonumentExtended pt-5">Discovery</h3>
                  <p className="Archivo">What's going on in your marketplace? What are the best target markets for your product or service?</p>
                </div>
                <div className="col-lg-6 col-md-6 col-6 ProcessingSec">
                  <h2 className="py-3 MonumentExtended numbering">02</h2>
                  <img src="/images/team.jpg" alt="Dropify Tech Processing Scheme Strategy" />
                  <h3 className="MonumentExtended pt-5">Strategy</h3>
                  <p className="Archivo">All of the information you gather in step #1 is then used to help make your decisions as you create your marketing plans.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex" style={{ gap: "40px" }}>
                <div className="col-lg-6 col-md-6 col-6 ProcessingSec">
                  <h2 className="py-3 MonumentExtended numbering">03</h2>
                  <img src="/images/team.jpg" alt="Dropify Tech Processing Scheme Strategy" />
                  <h3 className="MonumentExtended pt-5">Implementation</h3>
                  <p className="Archivo">Implementation is where you put your targeted, cost-effective marketing campaigns into action.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-6 ProcessingSec">
                  <h2 className="py-3 MonumentExtended numbering">04</h2>
                  <img src="/images/team.jpg" alt="Dropify Tech Processing Scheme Strategy" />
                  <h3 className="MonumentExtended pt-5">Measurement</h3>
                  <p className="Archivo">Measuring results enables  to make intelligent decisions regarding how to allocate resources for the next go-round.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-6">
              <h2 className="MonumentExtended">Our<span className="bestWorks">Best Work</span>of Successful Projects</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-6 align-items-end">
              <NavLink to="/services">
                <div type="button" class="seeMoreBtn Archivo d-flex justify-content-between mt-5">
                  <span>See More</span>
                  <i class="fa-solid fa-arrow-right fs-3"></i>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="row d-flex position-relative">
            <div className="col-lg-6 col-md-6 col-6">
              <div className="carouselSec p-5">

                <div class="button-prev position-absolute">
                  <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="button-next position-absolute">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>

                <h1 className="text-light MonumentExtended">motion</h1>
                <img src="/images/contact-us.jpg" className="w-100" alt="Dropify Tech - Our Best Work of Successful Projects" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <div className="carouselSec p-5">
                <h1 className="text-light MonumentExtended">motion</h1>
                <img src="/images/contact-us.jpg" className="w-100" alt="Dropify Tech - Our Best Work of Successful Projects" />
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-4 col-md-4 col-4"></div>
            <div className="col-lg-4 col-md-4 col-4 d-flex justify-content-between w-25 m-auto">
              <div className="BestWorkbtns">
                <span className="Archivo">Ecommerce</span>
              </div>
              <div className="BestWorkbtns">
                <span className="Archivo">Shopify</span>
              </div>
              <div className="BestWorkbtns">
                <span className="Archivo">Store</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4"></div>
          </div>
        </div>
        {/* How Our Magical Process Works Section End*/}
      </Layout>
    </div>
  );
};

export default HomePage;