import styled from "styled-components";
import imgFormulas from "../../assets/Pattern.svg";
import imgCycle from "../../assets/Cycle.svg";
import { useGlobalContext } from "../../context";
import { useCallback } from "react";

export const Banner = () => {
  const { scrollToElementRef } = useGlobalContext();

  const onLearnMoreClick = useCallback(() => {
    scrollToElementRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollToElementRef]);

  return (
    <S.Section>
      <S.BgImage src={imgFormulas} />
      <S.Wrapper className="container">
        <h3>crypto trading</h3>
        <h1>
          Engineers Meet <span>Traders __</span>
        </h1>
        <p>
          Advanced crypto algorithmic trading and efficient <br />
          cross-chain execution, at scale.
        </p>
        <S.Button className="blueButton" onClick={onLearnMoreClick}>
          learn more <span></span>
        </S.Button>
      </S.Wrapper>
      <S.ImgWrapper>
        <S.Image src={imgCycle} />
      </S.ImgWrapper>
    </S.Section>
  );
};

const S = {
  Section: styled.section`
    position: relative;
    overflow: hidden;
    @media (max-width: 767px) {
      background: url(Pattern.svg);
      background-size: width= "1440" height= "678";
    }
  `,
  BgImage: styled.img`
    width: 100%;
    position: absolute;
    z-index: -1;
    @media (max-width: 767px) {
      display: none;
    }
  `,
  ImgWrapper: styled.div`
    @media (max-width: 767px) {
      height: 300px;
      width: 100%;
      position: relative;
    }
  `,
  Image: styled.img`
    position: absolute;
    right: -49px;
    top: 15%;
    z-index: -1;
    width: 614px;
    height: 435px;
    object-fit: contain;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0.09) 0%,
      rgba(196, 196, 196, 0) 100%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media (max-width: 1200px) {
      width: 472.31px;
      height: auto;
      right: -28px;
    }
    @media (max-width: 920px) {
      width: 432.31px;
    }
    @media (max-width: 767px) {
      width: 499.31px;
      height: 272px;
      top: 12px;
      right: -156px;
    }
  `,
  Wrapper: styled.div`
    padding-top: 100px;
    margin: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 767px) {
      justify-content: center;
      gap: 28px;
      padding-top: 50px;
    }
    h3 {
      font-size: 19.2776px;
      @media (max-width: 767px) {
        text-align: center;
      }
    }
    h1 {
      margin: 0;
      font-weight: 600;
      font-size: 90px;
      color: #ffffff;
      text-shadow: 0px 5.14068px 5.14068px rgba(0, 0, 0, 0.25);
      line-height: 1;
      @media (max-width: 1200px) {
        font-size: 68px;
      }
      @media (max-width: 920px) {
        font-size: 52px;
      }
      @media (max-width: 767px) {
        font-size: 46px;
        text-align: center;
      }
    }
    h1 > span {
      background: linear-gradient(
        89.95deg,
        #487fff -1.65%,
        #73b5ff 51.06%,
        #cb76ff 99.96%
      );
      display: block;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (max-width: 767px) {
        display: inherit;
      }
    }
    p {
      font-size: 25.7034px;
      line-height: 1.2;
      color: #e9e9e9;
      @media (max-width: 920px) {
        font-size: 20px;
      }
      @media (max-width: 767px) {
        font-size: 18px;
        text-align: center;
      }
    }
  `,
  Button: styled.a`
    margin: 5% auto;
    align-items: center;
    span {
      background: url(circle.svg) center no-repeat;
      width: 34px;
      height: 34px;
    }
  `,
};
