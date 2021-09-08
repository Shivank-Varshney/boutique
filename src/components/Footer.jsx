import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { NavLink } from "react-router-dom";

function Footer() {
  const ScrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      {/* Footer Section Start */}
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-11 mx-auto main-footer-container">
              <div className="row">
                <div className="col-12">
                  <div className="subcribe-footer">
                    <div className="subscribe-text">
                      subscribe for our latest updates
                    </div>
                    <div className="btn subscribe-btn">subscribe</div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-md-0 mb-5">
                  <h6 className="footer-list-heading">online shopping</h6>
                  <ul className="footer-list">
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Men
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Women
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Kids
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Home & Living
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Beauty
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Gift Cards
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-md-0 mb-5">
                  <h6 className="footer-list-heading">useful links</h6>
                  <ul className="footer-list">
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        T&C
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Terms of Use
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Track Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Shipping
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Cancellation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Returns
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Whitehat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Careers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="list" onClick={ScrollToTop}>
                        Privacy Policy
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 mb-md-0 mb-5">
                  <h6 className="footer-list-heading">keep in touch</h6>
                  <ul className="footer-icon-list">
                    <li>
                      <a href="">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <PinterestIcon />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <WhatsAppIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
}

export default Footer;
