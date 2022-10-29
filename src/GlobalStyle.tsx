import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background-color: #000000;
  --accent-fill: #1556ee;
}
@font-face {
  font-family: "Mazzard";
  src: url("fonts/Mazzard/MazzardH-Regular.woff2") format("woff2"),
    url("fonts/Mazzard/MazzardH-Regular.woff") format("woff"),
    url("fonts/Mazzard/MazzardH-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
body {
  scroll-behavior: smooth;

  font-family: "Mazzard";
  color: #ffff;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  cursor: url(https://cdn.custom-cursor.com/db/9018/32/starter-pixel-ice-cursor.png),
    default !important;
}
.wrapper {
  height: 100%;
  padding-bottom: 100px;
  overflow: hidden;
  background: radial-gradient(
      farthest-side at bottom left,
      rgb(87 87 87 / 30%),
      #00000000 200px
    ),
    radial-gradient(
      farthest-side at top left,
      rgb(87 87 87 / 30%),
      #00000000 200px
    );
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
}
section {
  margin: 20px 0;
  padding: 20px 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: url(https://cdn.custom-cursor.com/db/9017/32/starter-pixel-ice-pointer.png),
    pointer !important;
}
h2 {
  letter-spacing: 0.02em;
  font-size: 40px;
  @media (max-width: 920px) {
    font-size: 32px;
  }
}
h4 {
  font-weight: 600;
  font-size: 30px;
  @media (max-width: 920px) {
    font-size: 24px;
  }
}
h3 {
  font-weight: 500;
  text-transform: uppercase;
  color: #aaaaaa;
  @media (max-width: 767px) {
    font-size: 14px;
  }
}
.container {
  max-width: 90%;
  margin: 0 auto;
  /* @media (max-width: 576px) {
    max-width: 94%;
  } */
}
a {
  cursor: url(https://cdn.custom-cursor.com/db/9017/32/starter-pixel-ice-pointer.png),
        pointer !important;
  transition: 300ms;
}
.blueButton {
  background: linear-gradient(140.6deg, #3e6ff9 -27.18%, #3e53f8 126.06%);
  box-shadow: 0px 0px 49px rgba(42, 7, 254, 0.4);
  border-radius: 10px;
  width: auto;
  width: fit-content;
  display: flex;
  padding: 16px 32px;
  gap: 12px;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  @media (max-width: 1375px) {
    padding: 14px 28px;
  }
  @media (max-width: 1199px) {
    padding: 12px 28px;
  }
  :hover {
    cursor: url(https://cdn.custom-cursor.com/db/9017/32/starter-pixel-ice-pointer.png),
      pointer !important;
      transition: 0.4s;
      box-shadow: 0px 0px 49px rgba(42, 7, 254, 0.8);
  }
  .colorGray {
    color: #aaaaaa;
  }
}
.gradientAccent {
  background: linear-gradient(
    89.95deg,
    #487fff -1.65%,
    #73b5ff 51.06%,
    #cb76ff 99.96%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.fs-25 {
  font-size: 25px;
}
header {
  & a {
    color: #fff;
    text-decoration: none;
    &:hover {
      cursor: url(https://cdn.custom-cursor.com/db/9017/32/starter-pixel-ice-pointer.png),
        pointer !important;
      transition: 0.4s;
      color: var(--accent-fill);
    }
  }
}
.bg-1,
.bg-2 {
  @media (max-width: 1000px) {
    display: none;
  }
}
.bg-1 {
  width: 742px;
  height: 597px;
  top: -10%;
  left: -186px;
  top: -170px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.09) 0%,
    rgba(196, 196, 196, 0) 100%
  );
}
.bg-2 {
  top: 89%;
  width: 923.19px;
  height: 580.96px;
  left: -17px;
  background: linear-gradient(
    0deg,
    rgba(87, 87, 87, 0.23),
    rgba(87, 87, 87, 0.23)
  );
  filter: blur(100px);
  border-radius: 2.71815e7px;
  transform: rotate(157.5deg);
}
.bg-1,
.bg-2,
.bg-3,
.bg-4,
.bg-5,
.bg-6 {
  z-index: -1;
  position: absolute;
}
.schemaEntity {
  background: #000000;
  border-radius: 10.8167px;
  width: 162px;
  min-height: 52.28px;
  height: fit-content;
  margin: auto;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.17);
  border-right-color: rgba(255, 255, 255, 0.18);
  position: relative;
  z-index: 10;
  p {
    padding-top: 14px;
    padding-bottom: 14px;
    font-weight: 400;
    font-size: 14.4222px;
    line-height: 170%;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
  }
  @media (max-width: 576px) {
    max-width: 123px;
  }
}
.blockStyle {
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -4.50695px -4.50695px 225.348px rgba(255, 255, 255, 0.02);

  border: 1px solid rgba(238, 237, 237, 0.2);
  border-radius: 25.2389px;
}
.backFilter {
  backdrop-filter: blur(12.6195px);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: 25.2389px;
}

      
`;
