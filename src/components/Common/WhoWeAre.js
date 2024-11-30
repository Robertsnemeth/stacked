"use client";

import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <section className="who-we-are ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Mission & <span>Vision</span>
            </h2>
            <p>
              <span>Our Mission: </span> 
              <br />
              To create the best possible experiences for our clients through innovative data analysis, 
              proven platform solutions, and unmatched partnership services. We help businesses increase reach, 
              relevance, and return on investment (ROI) through strategic, data-driven marketing.
            </p>
            <br />
            <p>
              <span>Our Vision: </span>
              <br />
              To be the most valued marketing partner for every business or brand we touch. 
              Our commitment is to help our clients succeed by delivering impactful marketing solutions that exceed expectations.
            </p>
          </div>

          <div className="row">

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <i className="fa-solid fa-lightbulb"></i>
                <h4>Network</h4>
                <p>
                Over 20 years of digital marketing, broadcast media and professional outreach has enabled us to 
                amass a vast array of golden relationships. Our close circle can help us to build out the most efficient and 
                effective marketing strategies possible for your small, medium or large business.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <i className="fa fa-tag"></i>
                <h4>Execution</h4>
                <p>
                Execution isn’t just launching a campaign – it’s a way of nurturing, developing and optimizing the strategy. 
                We’ll continuously monitor the performance of each ad, identify weaknesses and modify the strategy to achieve 
                the highest possible level of success.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <i className="fa fa-scissors"></i>
                <h4>Transparency</h4>
                <p>
                We carefully analyze consumer and performance data throughout each campaign to provide strategic 
                recommendations and enhancements in real-time. You’ll have access to our data and your analytics at 
                all times to ensure we’re on the right track.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <i className="fa fa-users"></i>
                <h4>Consultation</h4>
                <p>
                Let’s talk about your vision for the future of your business. 
                We take a big-picture approach to marketing, strategizing to meet specific short-term, intermediate,
                and long-term goals.
                </p>
              </div>
            </div>

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <i className="fa-brands fa-linode"></i>
                <h4>We are Unique</h4>
                <p>
                  Fringilla augue at maximus vestibulum. Nam pulvinar vitae
                  neque et porttitor. Praesent sed nisi eleifend.
                </p>
                <span>5</span>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-who-we-are">
                <i className="fa fa-life-ring"></i>
                <h4>We are Support</h4>
                <p>
                  Fringilla augue at maximus vestibulum. Nam pulvinar vitae
                  neque et porttitor. Praesent sed nisi eleifend.
                </p>
                <span>6</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
