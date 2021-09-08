import React from "react";
import { NavLink } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import Img1 from "../assets/home-fouth.png";
import Img2 from "../assets/img1.png";
import Img3 from "../assets/img2.png";
import Img4 from "../assets/img3.png";

function Home() {
  return (
    <>
      {/* Home Header Section Start */}
      <header id="home-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 px-0">
              <div className="category-tab">
                <div className="heading">Categories</div>
                <ul>
                  <li>
                    <NavLink className="link" to="/">
                      Dress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/">
                      Tops
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/">
                      Jeans
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/">
                      Designer Kurtis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/">
                      Plazo sets
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Home Header Section End */}

      {/* Second Section Start */}
      <section id="home-second-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-md-1 order-2">
              <img src={Img2} className="img-fluid" alt="illustration" />
              <div className="row">
                <div className="col-6">
                  <img
                    src={Img3}
                    style={{ width: "100%", height: "220px" }}
                    className="img-fluid"
                    alt="illustration"
                  />
                </div>
                <div className="col-6">
                  <div className="offers">
                    <p>offers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="offers">
                <p>offers</p>
              </div>
              <img src={Img4} className="img-fluid" alt="illustration" />
            </div>
          </div>
        </div>
      </section>
      {/* Second Section End */}

      {/* Third Section Start */}
      <section id="home-third-section">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12">
              <div className="offers">Offers</div>
            </div>
          </div>
        </div>
      </section>
      {/* Third Section End */}

      {/* Fourth Section Start */}
      <section id="home-fourth-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-sm-6">
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, unde molestiae magni eaque laudantium est
                    consequuntur aut ab dolor possimus, perferendis rem earum
                    ipsum dignissimos eos debitis optio sequi consequatur alias
                    minus cumque quam fugit. Accusantium aliquid perferendis
                    necessitatibus iusto quo reprehenderit. Culpa optio veniam
                    velit totam laboriosam sequi, similique veritatis. Maxime
                    officiis molestiae quos blanditiis voluptates quis ut enim?
                    Minus rerum, ipsum hic provident deleniti velit cumque
                    asperiores ratione iusto. Autem distinctio modi quo hic rem
                    eligendi id, minus, nemo ullam ipsum magnam fugit quibusdam.
                    Sequi laborum quidem qui eveniet aperiam, magnam unde odio
                    obcaecati ex, magni alias consequatur!
                  </div>
                </div>
                <div className="col-sm-6">
                  <img src={Img1} className="img-fluid" alt="illustration" />
                </div>
                <div className="col-12 d-flex">
                  <div className="btn explore-btn mx-auto">Explore More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fourth Section End */}

      {/* Treanding Section Start */}
      <section id="home-trending">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-12">
                  <div className="trending-section-heading">trending</div>
                </div>
              </div>
              <div className="row">
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Treanding Section End */}
    </>
  );
}

export default Home;
