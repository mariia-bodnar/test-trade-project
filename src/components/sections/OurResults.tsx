import styled from "styled-components";
import Element from "../../assets/Element.svg";
import Pattern from "../../assets/PatternPath.svg";
import elemMobile from "../../assets/mathPicMobile.svg";

export const OurResults = () => {
  return (
    <section>
      <S.Wrapper className="container">
        <S.Table className="tableStyles w-35 ">
          <div className="imageWrapper">
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
          </div>
          <div className=" unicStls">
            <h3>Spot & Margin</h3>
            <h2>
              Trade <span className="gradientAccent">200+</span> pairs with up
              to 10x leverage
            </h2>
            <a href="#">Learn more</a>
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
      display: flex;
      flex-direction: column;
      @media (max-width: 990px) {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        .imageWrapper {
          height: 160px;

          .transform {
            display: none;
          }
          .mobilePic {
            position: absolute;
            transform: translateY(-160px);
            right: 0;
            width: 100%;
            @media (max-width: 576px) {
              top: 25%;
            }
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
      cursor: url(https://cdn.custom-cursor.com/db/9645/32/milky-way-pointer.png),
        pointer !important;
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
    transform-style: preserve-3d;
    perspective: 1000px;
    transition:all ease-in-out 0.4s ;
    :hover .textPart  {
      transform: translateZ(12px);
      transition: 300ms;
    }
    :hover  .unicStls{
      transform: translateZ(12px);
      transition: 300ms;
    }
    :hover {
      
    }
    img {
      width: 104%;
      object-fit: contain;
      z-index: 0;
    }
    .textPart,
    .unicStls {
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
      height: 70% !important;
      box-sizing: content-box;
      z-index: 5;
      h2 {
        max-width: 308px;
      }
      /* gap: 90px; */

      @media (max-width: 990px) {
        padding: 40px;
      }
      @media (max-width: 576px) {
        padding: 25px;
      }
    }
    .imageWrapper {
      height: 30%;
      max-height: 30%;
      position: relative;
    }
    .transform {
      position: absolute;
      transform: translateY(-25%);
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
