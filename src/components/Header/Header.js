import React from "react";
import styled from "styled-components";

import Navigation from "components/Nav";

const GENSHIN_HERO = "/assets/images/genshin_img.jpg";
const StyledHero = styled.div`
  background-color: #333;
  background-image: url(${GENSHIN_HERO});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

const Header = () => {
  return (
    <StyledHero>
      <Navigation />
    </StyledHero>
  );
};

export default Header;
