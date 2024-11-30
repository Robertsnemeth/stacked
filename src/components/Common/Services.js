"use client";

import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section id="services" className="services-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
            <span>Your Success is Our Mission.</span>
            <br />
            At Stacked, we’re not just a vendor; we’re your marketing partner. 
            We believe in building enduring relationships, offering flexible, on-demand solutions to meet your evolving needs. 
            From day one, we promise to bring you innovative, data-driven strategies that deliver real, 
            measurable results—without unnecessary costs.

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
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img1.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Paid Search Ads</h3>
                  <p>
                  Paid advertising is advertising that requires payment for the use of the ad space, 
                  as opposed to owned or earned advertising. Because paid ads cover such a wide array of ad types, 
                  including PPC, PPI, and display, they offer a range of benefits from improving your brand awareness 
                  to directly increasing your revenue.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img2.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa-brands fa-linode"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Campaign Mangement</h3>
                  <p>
                  Successful marketing requires an investment of time and attention that most business leaders don’t have to spare, 
                  as well as insights and expertise that only come from years of experience. 
                  Our digital marketing team can generate demand for your product or service by strategizing, organizing, 
                  and implementing the marketing tactics that are best suited to your brand.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img3.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-desktop"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Social Media Mangement</h3>
                  <p>
                  Paid social media advertising makes it fast and affordable to target based on consumer behavior and interests. 
                  We focus on the global social titans like Facebook, Instagram, and LinkedIn and include any other platforms 
                  where you’ve developed an audience.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img4.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-line-chart"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Content Creation</h3>
                  <p>
                  Up to 60% of consumers will not engage with your brand after seeing a poorly produced marketing video,
                  and you can expect similar reactions to your ad campaigns. 
                  We’ll create impactful video and graphic content that connects with your audience and draws them into your brand.
                  </p>
                </div>
              </div>
            </div>

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img5.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-anchor"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img6.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-headphones"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Ui & Ux Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img7.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-mobile"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Responsive Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img8.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-camera-retro"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Photography</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-services">
                <div className="services-img">
                  <Image
                    src="/images/services-img9.jpg"
                    alt="services"
                    width={585}
                    height={400}
                  />

                  <div className="icon">
                    <i className="fa fa-life-ring"></i>
                  </div>
                </div>

                <div className="services-content">
                  <h3>Custom Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
