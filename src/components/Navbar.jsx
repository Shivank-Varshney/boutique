import React, { useState } from "react";
import Search from "../assets/search.svg";
import Cart from "../assets/cart.svg";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [state, setstate] = useState(false);
  const [disp, setDisp] = useState("none");
  const Toggler = () => {
    if (state == false) {
      setDisp("block");
      setstate(!state);
    } else {
      setDisp("none");
      setstate(!state);
    }
  };
  return (
    <>
      <section id="navbar">
        <div className="container-fluid">
          <div className="row web-view d-xl-flex d-none">
            <div className="col-6 mx-auto">
              <ul>
                <li>
                  <NavLink className="link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link px-3" to="/">
                    <img src={Search} alt="search icon" />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link px-3" to="/">
                    <img src={Cart} alt="cart icon" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mobile-view" style={{ display: disp }}>
            <ul>
              <li>
                <NavLink onClick={Toggler} className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Toggler} className="link" to="/">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Toggler} className="link" to="/">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Toggler} className="link" to="/">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Toggler} className="link" to="/">
                  <img src={Search} alt="search icon" />
                </NavLink>
              </li>
              <li>
                <NavLink onClick={Toggler} className="link" to="/">
                  <img src={Cart} alt="cart icon" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col">
              <div className="hemburger-menu" onClick={Toggler}>
                <MenuIcon />
              </div>
              <img src={Logo} className="img-fluid logo" alt="logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
