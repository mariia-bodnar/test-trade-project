import styled from "styled-components";
import Vector from "../../../assets/Vector.svg";
import Arrow from "../../../assets/Arrow.svg";

export const DesktopSchema = () => {
  return (
    <S.VisualPartDesktop className="desktop">
      <div className="start blockStyle">
        <div className="backFilter"></div>
        <div className="schemaLines">
          <span></span>
          <span className="inner"></span>
          <span></span>
        </div>
        <div className="schemaEntity">
          <p>Artificial Intelligence</p>
          <span></span>
        </div>
        <div className="schemaEntity">
          <p>Storage Networks</p>
        </div>
        <div className="schemaEntity">
          <p>P2P Networks</p>
        </div>
      </div>
      <div className="middle">
        <span className="inner"></span>
        <div className="schemaLines">
          <span></span>
          <span></span>
        </div>
        <div className="schemaEntity">
          <p>Public Data</p>
        </div>
        <div className="schemaEntity">
          <p>Encrypted Private Data</p>
        </div>
      </div>
      <div className="last">
        <div className="blockStyle">
          <div className="backFilter"></div>
          <img src={Vector} alt="icon"></img>
          <div className="flexibleBlock">
            <h5>
              Easy to use digital service and exclusive personal service for our
              active traders
            </h5>
            <div className="innerGap">
              <div className="schemaEntity">
                <p>Indexing</p>
              </div>
              <div className="schemaEntity">
                <p>API</p>
              </div>
            </div>
          </div>
          <div className="arrows">
            <img className="rotate" src={Arrow} alt="arrow"></img>
            <img src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <h6>Consumers</h6>
      </div>
    </S.VisualPartDesktop>
  );
};

const S = {
  VisualPartDesktop: styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: 3fr 3fr 4fr;

    .start,
    .middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto 0;
    }
    .start {
      padding-top: 40px;
      padding-bottom: 40px;
      gap: 27px;
      position: relative;
      height: fit-content;
      .blockStyle {
      }
      .schemaLines {
        margin: 2px 0px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        height: 164px;
        top: 66px;
        right: 0;
        z-index: -1;
        span {
          margin: 1px 0px;
          width: 100%;
          height: 1px;
          max-height: 1px;
          display: block;
          background: linear-gradient(90deg, #b7b6bb 0%, #5e5971 102.25%);
        }
        .inner {
          transform: translateX(20px);
        }
      }
    }
    .middle {
      height: 164px;
      max-height: 164px;
      width: 100%;
      padding: 20px 0px;
      gap: 30px;
      margin: auto;
      position: relative;
      .schemaLines {
        margin: 2px 0px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 150%;
        height: 101px;
        top: 46px;
        left: 20px;
        span {
          margin: 1px 0px;
          width: 100%;
          height: 1px;
          max-height: 1px;
          display: block;
          background: linear-gradient(90deg, #b7b6bb 0%, #5e5971 102.25%);
          z-index: 1;
        }
      }
      .inner {
        width: 1px;
        max-height: 97px;
        display: block;
        background: linear-gradient(90deg, #b7b6bb 0%, #5e5971 102.25%);
        position: absolute;
        left: 20px;
        height: 100px;
        transform: translateY(-3px);
      }
    }
    .last {
      display: flex;
      flex-direction: column;
      .backFilter {
        backdrop-filter: blur(12.6195px);
        position: absolute;
      }
      .blockStyle {
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-bottom: 54px;
        backdrop-filter: url;
        position: relative;
        @media (min-width: 1300px) and (max-width: 1500px) {
          margin-bottom: 70px;
        }
        @media (min-width: 1200px) and (max-width: 1300px) {
          margin-bottom: 90px;
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
        .flexibleBlock {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-bottom: 50px;
        }
        .innerGap {
          display: flex;
          flex-direction: column;
          gap: 37px;
        }
        img {
          margin: auto;
        }
        h5 {
          font-weight: 400;
          font-size: 14.4222px;
          line-height: 138%;
          text-align: center;
          font-feature-settings: "pnum" on, "lnum" on;
          color: #ffffff;
          @media (min-width: 1200px) and (max-width: 1400px) {
            font-size: 13.4222px;
          }
        }
      }
      .arrows {
        position: absolute;
        display: flex;
        gap: 20px;
        bottom: -40px;
        left: 43%;
        .rotate {
          transform: rotate(180deg);
        }
      }
      h6 {
        font-weight: 400;
        font-size: 16.225px;
        line-height: 170%;
        text-align: center;
      }
    }

    @media (max-width: 1200px) {
      width: 100%;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      grid-template-columns: 3fr 3fr 3fr;
    }
  `,
};
