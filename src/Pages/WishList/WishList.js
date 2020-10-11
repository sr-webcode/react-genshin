import React from "react";
import styled from "styled-components";

const KLEE_BG = "assets/images/klee.png";
const GENSHIN_HERO = "/assets/images/genshin_img.jpg";

const HERO_WISHLIST = [
  {
    name: "KLEE",
    picture:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619524764235.png",
  },
  {
    name: "DILUC",
    picture:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619504030315.png",
  },
  {
    name: "RAZOR",
    picture:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619513419872.png",
  },
  {
    name: "NOELLE",
    picture:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200315/2020031517331182257.png",
  },
  {
    name: "XIAO",
    picture:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619530797687.png",
  },
];

const StyledOverride = styled.div`
  overflow: hidden;
  background-color: #f3f2f0;
  height: 100vh;
  .hero-list {
    list-style: none;
    min-height: 360px;
    .hero-card {
      overflow: hidden;
      border-radius: 4px;
      background-color: rgba(17, 17, 17, 0.4);
      p {
        background-color: #1a2325;
      }
    }
    .hero-img {
      display: block;
      max-width: 106px;
    }
  }
`;

const StyledBanner = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url(${GENSHIN_HERO});
  background-size: cover;
  background-position: center center;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    background-image: url(${KLEE_BG});
    background-position: center center;
    width: 500px;
    height: 300px;
  }
  .wishlist-text {
    font-size: 56px;
    max-width: 800px;
  }
`;

const HeroList = () => (
  <div className="mw-1200 mx-auto hero-list-container">
    {
      <ul className="hero-list d-flex align-items-center justify-content-center">
        {HERO_WISHLIST.map((hero) => (
          <li className="m-5" key={hero.name}>
            <div className="hero-card">
              <img className="hero-img" src={hero.picture} alt={hero.name} />
              <p className="text-center text-white text-uppercase">
                {hero.name}
              </p>
            </div>
            <button className="d-block mt-2 p-1 w-100">add this hero</button>
          </li>
        ))}
      </ul>
    }
  </div>
);

const WishList = () => {
  return (
    <StyledOverride>
      <StyledBanner className="d-flex align-items-center">
        <h1 className="ml-4 wishlist-text text-uppercase text-white">
          ADD A HERO WISHLIST TO YOUR ACCOUNT!
        </h1>
      </StyledBanner>
      <HeroList />
    </StyledOverride>
  );
};

export default WishList;
