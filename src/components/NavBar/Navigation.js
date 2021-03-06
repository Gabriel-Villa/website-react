import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdGavel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import MenuItems from "./MenuItems";

import "../css/Navigation.css";

const Nav = styled.nav`
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgb(73, 63, 251, 1) 100%
  );
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const Navigation = () => {
  return (
    <>
      <Nav>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link to="/" className="navbar-brand text-white">
              MyWebsite <MdGavel />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white">
                <FaBars />
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ml-auto">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index} className="nav-item p-2 mx-2">
                      <Link
                        style={{ hover: "red" }}
                        className={item.className}
                        to={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </Nav>
    </>
  );
};

export default Navigation;
