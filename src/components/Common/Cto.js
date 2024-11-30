"use client";

import React from "react";
import Link from "next/link";

const Cto = () => {
  return (
    <>
      <section
        className="ctr-area ptb-80"
        style={{ backgroundImage: `url(/images/ctr-bg.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-0">
                <h4>Our M.O.</h4>

                <h2>Coummunicate How You Wish</h2>

                <p>
                At Stacked, we believe in clear, honest communication - on your time, whatever line you want. 
                Whether it be phone, text, email, social, IM, we’re available.  
                When you work with Stacked we’re accessible and responsive, market-aware, 
                and genuinely invested in your success.
                </p>

                <Link href="#contact" className="btn btn-primary">
                  Contact
                </Link>
                {/* <Link href="#work" className="btn btn-primary view-work">
                  View Work
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cto;
