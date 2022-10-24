import styled from "styled-components";
import Element from "../../assets/Element.svg";
import Pattern from "../../assets/PatternPath.svg";
import elemMobile from "../../assets/mathPicMobile.svg";

export const OurResults = () => {
  return (
    <section>
      <S.Wrapper className="container">
        <S.Table className="tableStyles w-35">
          <img
            className="transform"
            src={Element}
            alt="background math calculations"
          />
          <img
            className="mobilePic"
            src={elemMobile}
            alt="background math calculations"
          />
          <div className="translate unicStls">
            <div className="textPart ">
              <h3>Spot & Margin</h3>
              <h2>
                Trade <span className="gradientAccent">200+</span> pairs with up
                to 10x leverage
              </h2>
              <a href="#">Learn more</a>
            </div>
          </div>
        </S.Table>
        <div className="gridRows">
          <div className="gridCols">
            <S.Table className="tableStyles">
              <div className="textPart ">
                <h3>Derivatives</h3>
                <h2>40+ quarterly futures and contracts</h2>
                <a href="#">Learn more</a>
              </div>
            </S.Table>
            <S.Table className="tableStyles">
              <div className="textPart ">
                <h3>Trading Arena</h3>
                <h2>Prize pools worth up to USD 1,000,000</h2>
                <a href="#">Learn more</a>
              </div>
            </S.Table>
          </div>
          <S.Table className="tableStyles hrzWay">
            <div className="textPart ">
              <h3>mobile app</h3>
              <h2>Trade anytime, anywhere</h2>
              <a href="#">Learn more</a>
            </div>
            <img className="diffSize" src={Pattern} alt="" />
          </S.Table>
        </div>
      </S.Wrapper>
    </section>
  );
};
const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 22px;
    max-height: 757px;
    @media (max-width: 990px) {
      display: flex;
      flex-direction: column;
      max-height: inherit;
    }
    .w-35 {
      width: 35%;
      min-width: 35%;
      @media (max-width: 990px) {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        .translate {
          margin-top: 0;
        }
        .transform {
          display: none;
        }
        .mobilePic {
          position: absolute;
          top: -10%;
          right: 0;
          width: 100%;
          @media (max-width: 576px) {
            top: 25%;
          }
        }
      }
      @media (min-width: 991px) {
        .mobilePic {
          display: none;
        }
      }
    }
    .tableStyles {
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.35);
      border-radius: 46px;
      border: 2px solid #323437;
    }
    .hrzWay {
      display: flex;
      @media (max-width: 576px) {
        padding-bottom: 89px;
        height: fit-content;
      }
    }
    .gridRows {
      width: calc(65% -22px);
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 22px;
      @media (max-width: 576px) {
        gap: 22px;
        display: flex;
        flex-direction: column;
      }
      .gridCols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px;
        @media (max-width: 576px) {
          display: flex;
          flex-direction: column;
        }
      }
    }
  `,
  Table: styled.div`
    overflow: hidden;
    position: relative;
    max-height: 747px;
    background: linear-gradient(
      315deg,
      hsl(60deg 2% 12%) 0%,
      hsl(60deg 2% 6%) 17%,
      hsl(60deg 3% 3%) 33%,
      hsl(0deg 0% 0%) 50%,
      hsl(60deg 3% 6%) 67%,
      hsl(60deg 2% 12%) 83%,
      hsl(60deg 2% 18%) 100%
    );
    img {
      width: 104%;
      object-fit: contain;
      z-index: 0;
    }
    .textPart {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 40px;
      padding: 40px;
      height: calc(100% - 80px);
      z-index: 2;
      a {
        color: #aaaaaa;
      }
      h2 {
        @media (max-width: 1300px) {
          font-size: 34px;
        }
        @media (max-width: 1244px) {
          font-size: 24px;
        }
      }
      @media (max-width: 990px) {
        gap: 25px;
        padding: 40px;
        h3 {
          font-size: 16px;
        }
      }
      @media (max-width: 576px) {
        padding: 25px;
        height: fit-content;
      }
    }
    .unicStls {
      height: fit-content;
      box-sizing: content-box;
      z-index: 5;
      h2 {
        max-width: 308px;
      }
      .textPart {
        height: fit-content;
        gap: 90px;
        @media (min-width: 1600px) {
          gap: 70px;
        }
        @media (max-width: 990px) {
          gap: 25px;
          padding: 40px;
        }
        @media (max-width: 576px) {
          padding: 25px;
          height: fit-content;
        }
      }
    }
    .transform {
      position: absolute;
      transform: translate3d(-16px, -16%, 0px);
    }
    .translate {
      margin-top: 56%;
      height: 378px;
    }
    .diffSize {
      width: 50%;
      height: fit-content;
      @media (max-width: 576px) {
        position: absolute;
        right: -25px;
        bottom: 0;
      }
    }
  `,
};
