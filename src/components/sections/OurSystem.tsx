import styled from "styled-components";
import Image from "../../assets/System.svg";
import ImgMobile from "../../assets/SystemMobile.svg";

export const OurSystem = () => {
  return (
    <S.Section>
      <S.Wrapper className="container">
        <img className="desktop" src={Image} alt="our system"></img>
        <img className="mobile" src={ImgMobile} alt="our system"></img>
        <div className="textPart">
          <h2>
            The future <span className="colorGray">of</span> Cryptocurrency
            trading <span className="gradientAccent">platform</span>
          </h2>
          <p>
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <a className="gradientAccent" href="#">
            Learn more
          </a>
        </div>
      </S.Wrapper>
    </S.Section>
  );
};
const S = {
  Section: styled.section`
    padding-top: 50px;
    @media (max-width: 1200px) {
      padding-top: 0px;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 22px;
    }
    @media (max-width: 576px) {
      flex-direction: column-reverse;
    }
    .desktop {
      @media (max-width: 576px) {
        display: none;
      }
    }
    .mobile {
      @media (min-width: 576px) {
        display: none;
      }
    }
    img {
      width: 60%;
      @media (max-width: 1200px) {
        width: 100%;
      }
    }
    .textPart {
      display: flex;
      flex-direction: column;
      gap: 22px;
      max-width: 35%;
      padding: 44px 0;
      height: fit-content;
      @media (max-width: 1200px) { 
        width: 75%;
        max-width: inherit;
    }
    @media (max-width: 576px) { 
        width: 100%;
    }
    }
    .textPart p {
      line-height: 1.4;
      color: #e9e9e9;
    }
  `,
};
