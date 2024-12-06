"use client";

import React from "react";
import Link from "next/link";

const Strategy = () => {
  return (
    <>
      <section className="strategy-area">
        <div className="container-fluid p-0">
          <div className="row ">
            <div
              className="col-lg-6 col-md-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div
                className="image"
                style={{ backgroundImage: `url(/images/about-strategy.jpg)` }}
              ></div>
            </div>

            <div
              className="col-lg-6 col-md-7"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="about-strategy ptb-80">
                <div className="section-title">
                  <h4>Highly Creative Solutions</h4>
                  <h2>
                    Our <span>Approach</span>
                  </h2>
                  <p>
                    <span className="simplicity-span">Simplicity.</span>
                    <br/>
                    <span>
                      We help make an overwhelming marketing landscape simple.
                      More often than not, disjointed marketing solutions miss the bigger picture. Driving results.
                    </span>
                    <br/> 
                    Stacked bridges these gaps by offering a single, cohesive view of your entire marketing process. 
                    By leveraging data, strategic insights, and seamless execution, 
                    we bring all the necessary elements together to deliver measurable results while optimizing costs. 
                    With Stacked, you gain a trusted partner who combines depth and agility to drive your brand forward.
                  </p>
                </div>

                <ul>
                  <li>
                    <i className="fa fa-check"></i>Creative Design
                  </li>
                  {/* <li>
                    <i className="fa fa-check"></i>Retina Ready
                  </li> */}
                  <li>
                    <i className="fa fa-check"></i>Responsive Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Modern Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Awesome Design
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Digital Marketing & Branding
                  </li>
                </ul>

                <Link href="#contact" className="btn btn-primary w-25">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
