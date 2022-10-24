import { createContext } from "react";
import { createGlobalStyle } from "styled-components";
import { Banner } from "./components/banner/Banner";
import { Menu } from "./components/menu/Menu";
import { Content } from "./components/sections/Content";
import { GlobalContextProvider } from "./context";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #000000;
    --accent-fill: #1556EE;
  }
  @font-face {
    font-family: 'Mazzard';
    src: 
        url('fonts/Mazzard/MazzardH-Regular.woff2') format('woff2'),
        url('fonts/Mazzard/MazzardH-Regular.woff') format('woff'),
        url('fonts/Mazzard/MazzardH-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  body{
    /* scroll-behavior: smooth; */
    font-family: 'Mazzard';
    color: #ffff;
    margin: 0;
    padding: 0;
    background-color: var(--background-color) ;
  }
   #root {
    overflow: hidden;
   }
  .wrapper {
    height: 100%;
    padding-bottom: 100px;
    @media (max-width: 767px) {
     padding-bottom : 50px;
    }
  }
  section {
    margin: 20px 0;
    padding: 20px 0;
  }
  h1,h2,h3,h4,p {
    margin: 0;
  }
   a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
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
    @media (max-width: 576px) {
      max-width: 94%;
    }
  }
  .blueButton {
    background: linear-gradient(140.6deg, #3E6FF9 -27.18%, #3E53F8 126.06%);
    box-shadow: 0px 0px 49px rgba(42, 7, 254, 0.4);
    border-radius: 10px;
    width:auto;
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
      cursor: pointer;
      transition:0.4s ;
    }
    .colorGray {
      color: #AAAAAA;
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
        cursor: pointer;
        transition: 0.4s;
        color: var(--accent-fill);
      }
    }
  }
  .bg-1, .bg-2,.bg-3,.bg-4,.bg-5,.bg-6 {
    z-index: -1;
    position: absolute;
  }
  .bg-1 {
    width: 742px;
    height: 597px;
    top: - 10%;
    left: -186px;
    top: -170px;
    background: radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,0.09) 0%,rgba(196,196,196,0) 100%);
}
.bg-2 {
    top: 89%;
    width: 923.19px;
    height: 580.96px;
    left: -17px;
    bottom: 0;
    background: linear-gradient(0deg,rgba(87,87,87,0.23),rgba(87,87,87,0.23));
    filter: blur(100px);
    border-radius: 2.71815e7px;
    transform: rotate(157.5deg);
}
`;

function App() {
  return (
    <GlobalContextProvider>
      <div className="wrapper">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
       
        <GlobalStyle />
        <Menu />
        <main>
          <Banner />
          <Content />
        </main>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
