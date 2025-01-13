"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h4>
                <Link href="/">
                  <Image src='images/STACKED-MG-logo-1c-WHITE_FINAL_For-Web.png' alt="logo" width={90} height={30} unoptimized/>
                </Link>
              </h4>

              {/* <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    className="fa-brands fa-facebook-f"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    className="fa-brands fa-twitter"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link href="#" className="fa-brands fa-skype" target="_blank"></Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    className="fa-brands fa-instagram"
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    className="fa-brands fa-linkedin-in"
                    target="_blank"
                  ></Link>
                </li>
              </ul> */}

              <p>
                © Stacked Marketing Group. All Rights Reserved 2024.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
