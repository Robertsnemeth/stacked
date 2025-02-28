"use client";

import React from "react";
import Link from "next/link";

const MainBannerThree = () => {
  return (
    <>
      <div id="home" className="main-banner">
        <video
          loop
          muted
          autoPlay
          poster="#"
          className="video-background"
          data-reactid=".0.1.0.0"
        >
          <source
            data-reactid=".0.1.0.0"
            src="/video/promo-video.mp4"
            type="video/mp4"
          />
        </video>

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
                      Oh Hello There!
                    </h4>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    > 
                      Your Partners in <span>Marketing</span> Excellence
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
                      <br />
                      <span>That means more efficiencies, synergy, and accelerated outcomes for your business.</span>
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <Link href="#welcome" className="btn btn-primary">
                        Let&apos;s Meet
                      </Link>
                      {/* <Link href="#work" className="btn btn-primary view-work">
                        View Work
                      </Link> */}
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

export default MainBannerThree;
