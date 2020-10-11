import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GENSHIN_LOGO = "assets/images/genshinLogo.png";

const StyledNav = styled.nav`
  .genshin-logo {
    width: 160px;
    height: 80px;
  }
  background-color: rgba(17, 17, 17, 0.75);
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35);
  ul,
  li {
    list-style-type: none;
    text-transform: uppercase;
    margin: 0 10px;
    color: #ffffff;
    font-weight: 600;
    a {
      text-decoration: none;
      &:hover {
        color: #f4da8f !important;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <div className="mw-1200 mx-auto d-flex align-items-center justify-content-between">
        <img src={GENSHIN_LOGO} alt="genshin logo" className="genshin-logo" />
        <ul className="menu d-flex">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/wishlist">
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Navigation;
