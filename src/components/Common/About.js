"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=Uvfs8-tbqBgZvDwR",
        ]}
      />

      <section
        id="about"
        className="about-area ptb-80 bg-f6f6f6"
        style={{ backgroundImage: `url(/images/patt.png)` }}
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
              About <span>Stacked</span>
            </h2>
            <p>
            Stacked Marketing Group has a singularly focused purpose: elevate your business results by delivering impactful marketing strategies rooted in data,
            leveraged relationships and expertise.  
            Empowering our clients to thrive in a complex market, our team brings a unique blend of focus and innovation to every partnership.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-addax"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <div className="section-title">
                  <h2>
                    Our <span>Values</span>
                  </h2>
                  <p>
                  Driven by Innovation, Grounded in Trust
                  As an industry leader in innovative marketing solutions, 
                  we put data at the core of everything we do. 
                  Our values shape our approach to marketing:
                  </p>
                </div>

                <ul className="pull-left">
                  <li>
                    <i className="fa fa-check"></i> Trustworthy and Insightful: We build strong partnerships based on transparency and trust.
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Comprehensive and Data-Driven: Our strategies are rooted in thorough research, and we provide insights that inform every campaign.
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Fair Market Value: We bring cost-effective, high-impact solutions to each client, ensuring that every marketing dollar works as hard as possible.
                  </li>
                </ul>

                {/* <Link href="#" className="btn btn-primary">
                  Read More
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-video"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/about.jpg"
                  alt="about"
                  className="w-100"
                  width={560}
                  height={320}
                />

                <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
