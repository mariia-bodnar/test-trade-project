import styled from "styled-components";
import Vector from "../../../assets/Vector.svg";
import Arrow from "../../../assets/ArrowMob.svg";

export const MobileSchema = () => {
  return (
    <S.VisualPartMobile>
      <div className="start blockStyle">
        <div className="backFilter"></div>
        <div className="schemaLines">
          <span></span>
          <span className="inner"></span>
          <span></span>
        </div>
        <div className="schemaEntity">
          <p>P2P Networks</p>
        </div>
        <div className="bottomEntity">
          <div className="schemaEntity">
            <p>Artificial Intelligence</p>
          </div>
          <div className="schemaEntity">
            <p>Storage Networks</p>
          </div>
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
          <div className="flexibleBlock">
            <div className="schemaEntity">
              <p>Indexing</p>
            </div>
            <div className="schemaEntity">
              <p>API</p>
            </div>
          </div>
          <div className="textPart">
            <img src={Vector} alt="icon"></img>
            <h5>
              Easy to use digital service and exclusive personal service for our
              active traders
            </h5>
          </div>
          <div className="arrows">
            <img className="rotate" src={Arrow} alt="arrow"></img>
            <img src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <h6>Consumers</h6>
      </div>
    </S.VisualPartMobile>
  );
};

const S = {
  VisualPartMobile: styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    .start {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 20px 20px 24px 20px;

      .bottomEntity {
        display: flex;
        margin-top: 20px;
        .schemaEntity {
        }
      }
      .schemaLines {
        position: absolute;
        height: 75%;
        width: 50%;
        left: 25%;
        display: flex;
        justify-content: space-between;
        bottom: 0px;

        span {
          height: 60px;
          width: 1px;
          z-index: 0;
          background: linear-gradient(180deg, #b7b6bb 0%, #5e5971 102.25%);
          margin-top: auto;
        }
        .inner {
          height: calc(100% + 15px);
          transform: translateY(27px);
          margin: 0;
        }
      }
    }
    .middle {
      display: flex;
      padding: 35px 0px;
      margin-top: 40px;
      position: relative;
      .inner {
        width: 50%;
        height: 1px;
        background: #b7b6bb;
        margin-top: auto;
        position: absolute;
        top: 0px;
        left: 25%;
      }
      .schemaLines {
        position: absolute;
        height: 150%;
        width: 50%;
        left: 25%;
        display: flex;
        justify-content: space-between;
        top: 0px;

        span {
          height: 100%;
          width: 1px;
          z-index: 0;
          background: linear-gradient(180deg, #b7b6bb 0%, #5e5971 102.25%);
        }
      }
    }
    .last {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .blockStyle {
        padding: 20px 20px 50px 20px;
        display: flex;
        flex-direction: column;
        position: relative;
        .flexibleBlock {
          display: flex;
          padding-bottom: 10px;
        }
        .textPart {
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            max-width: 65px;
            margin: auto;
          }
          h5 {
            font-weight: 400;
            font-size: 14.4222px;
            line-height: 138%;
            text-align: center;
            font-feature-settings: "pnum" on, "lnum" on;
            color: #ffffff;
            width: 75%;
            margin: auto;
            text-align: center;
          }
        }
        .arrows {
          position: absolute;
          bottom: -25px;
          left: calc(50% - 23px);
          display: flex;
          gap: 20px;
          .rotate {
            transform: rotate(180deg);
          }
        }
      }
      h6 {
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        color: #ffffff;
        margin: auto;
      }
    }
  `,
};
