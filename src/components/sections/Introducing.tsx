import styled from "styled-components";
import Image from "../../assets/Chart.svg";
import { useGlobalContext } from "../../context";

export const Introducing = () => {
  const { scrollToElementRef } = useGlobalContext();

  return (
    <S.Section ref={scrollToElementRef}>
      <div className="container">
        <S.Sign />
        <S.Wrapper>
          <h3>about us</h3>
          <h2>Global technologies</h2>
          <S.Content>
            <img src={Image} alt="chart" />
            <div className="textPart">
              <h4>Level 1</h4>

              <p>
                <span className="polygonBlue"></span>
                Deploy a multi-legged futures strategy by simultaneously placing
                orders to buy and sell from the same order ticket.
              </p>
              <p>
                <span className="polygonRed"></span>
                Place and manage orders based on the Level 2 order book, which
                provides a live display of all bids and offers waiting to be
                executed.
              </p>

              <a href="#" className="blueButton">
                Start now
              </a>
            </div>
          </S.Content>
        </S.Wrapper>
      </div>
    </S.Section>
  );
};
const S = {
  Section: styled.section`
    padding-top: 50px;
    @media (max-width: 920px) {
      padding-top: 0px;
    }
  `,
  Sign: styled.span`
    display: block;
    background: url(sign.svg) center no-repeat;
    width: 17px;
    height: 29px;
    margin: auto;
    @media (max-width: 920px) {
      display: none;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 100px;
    @media (max-width: 1200px) {
      padding-top: 70px;
    }
    @media (max-width: 767px) {
      padding-top: 0px;
    }
    h3,
    h2 {
      text-align: center;
    }
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    margin-top: 16px;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 26px;
    }
    img {
      width: 40%;
      @media (max-width: 767px) {
        width: 90%;
      }
    }
    .textPart {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 38px;
      padding: 60px;
      justify-content: space-evenly;
      .blueButton {
        margin-top: 8px;
      }
      @media (max-width: 920px) {
        width: 50%;
        padding: 0px 26px;
      }
      @media (max-width: 767px) {
        width: 100%;
        padding: 0;
        gap: 22px;
      }
    }
    .textPart p {
      display: flex;
      max-width: 340px;
      line-height: 1.4;
      color: #e9e9e9;
      @media (max-width: 767px) {
        max-width: 100%;
      }
    }
    .polygonBlue {
      background: url(PolygonBlue.svg) center no-repeat;
      display: inline-block;
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
    .polygonRed {
      background: url(PolygonRed.svg) center no-repeat;
      display: inline-block;
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
    .blueButton {
      margin-top: 16px;
      padding: 16px 54px !important;
      @media (max-width: 920px) {
        padding: 14px 46px !important;
      }
    }
  `,
};
