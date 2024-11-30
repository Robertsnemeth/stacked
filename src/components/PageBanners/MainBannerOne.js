"use client";

import React from "react";
import Link from "next/link";

const MainBannerOne = () => {
  return (
    <>
      <div
        id="home"
        className="main-banner"
        style={{ backgroundImage: `url(/images/main-bg-1.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="main-banner-text">
                    <h4
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      Accelerated Marketing Tailored to Your Needs.
                    </h4>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      Your Partners In <span>Marketing</span> Excellence.
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      Stacked is more than just a marketing agency; we’re a collective 
                      of seasoned experts committed to building long-term, impactful relationships. 
                      In a landscape crowded with gluttonous marketing agencies, 
                      we stand apart by bringing under-inflated pricing with a 
                      deep industry knowledge and proven results to every client engagement.   
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <Link href="#welcome" className="btn btn-primary">
                        Get Started
                      </Link>

                      <Link href="#work" className="btn btn-primary view-work">
                        View Work
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBannerOne;
