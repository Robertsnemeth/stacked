"use client";

import React from "react";

const HowWeWork = () => {
  return (
    <>
      <section
        className="how-work ptb-80"
        style={{ backgroundImage: `url(/images/dott.jpg)` }}
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Why <span>Stacked</span>
            </h2>
            <p>
            <span className="how-we-work-span">
              End-to-End Marketing, Tailored for Results.
            </span>
            <br/>
            <span>
              Stacked is designed to be your comprehensive marketing solution. 
              With expertise across digital and traditional marketing strategies—including content creation, SEO, PPC, CRO, 
              and more—we provide our clients with a powerful end-to-end approach that enhances 
              consumer exposure, relevance, and ROI. 
            </span>
            <br/>
            <span>
              Our unique position as a hybrid marketing organization means we can act as an all-in-one agency without
              the hefty price tag. Whether you need us for a single project or an ongoing partnership, 
              we are here to make marketing easier and more effective, saving your budget while delivering maximum impact.
            </span>

            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                <h3>01.</h3>
                <h4>Building Relationships, Not Just Campaigns</h4>
                <p>
                We believe in fostering long-term partnerships built on trust, 
                transparency, and mutual respect. We're in it for the long haul, 
                working with you to build sustainable success.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                <h3>02.</h3>
                <h4>Nimble and Innovative</h4>
                <p>
                Our size allows us to be more innovative , experimental, and cost effective. 
                We're not bound by rigid processes, so we can explore new ideas and approaches 
                to find the best solutions for your business.
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
              <div className="single-how-work">
                <h3>03.</h3>
                <h4>Quality Over Quantity, Every Time</h4>
                <p>
                We prioritize quality over speed. We'll never compromise on the quality of our work to meet a rushed deadline.
                We believe in delivering exceptional results, even if it takes a little extra time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
