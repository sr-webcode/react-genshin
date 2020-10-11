import React from "react";
import styled from "styled-components";

import Header from "components/Header";

const StyleOverride = styled.div`
  div {
    line-height: 1.9;
  }
`;

const DummyContent = () => (
  <div className="mw-1200 mx-auto py-5">
    <h3 className="text-secondary my-3">Lorem ipsum dolor sit amet.</h3>
    <div className="text-secondary">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint
      numquam sequi porro ducimus amet dignissimos necessitatibus velit,
      blanditiis beatae doloribus! Magnam id quas incidunt nesciunt minus omnis
      maxime facilis nam labore et, hic libero consequatur, sint beatae optio
      reiciendis sed, aliquam at eum. Alias doloribus ipsum fuga dolores
      praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Libero aliquid quidem dolores officiis adipisci eos ea, temporibus nemo
      omnis dolorem!
    </div>
    <h3 className="text-secondary my-3">Lorem ipsum dolor sit amet.</h3>
    <div className="text-secondary mb-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam sint
      numquam sequi porro ducimus amet dignissimos necessitatibus velit,
      blanditiis beatae doloribus! Magnam id quas incidunt nesciunt minus omnis
      maxime facilis nam labore et, hic libero consequatur, sint beatae optio
      reiciendis sed, aliquam at eum. Alias doloribus ipsum fuga dolores
      praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Libero aliquid quidem dolores officiis adipisci eos ea, temporibus nemo
      omnis dolorem!
    </div>
  </div>
);

const HomePage = ({ history }) => {
  console.log(history.location);
  return (
    <StyleOverride>
      <Header />
      <DummyContent />
    </StyleOverride>
  );
};

export default HomePage;
