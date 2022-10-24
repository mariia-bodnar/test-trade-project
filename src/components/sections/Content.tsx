import styled from "styled-components";
import { Introducing } from "./Introducing";
import { OurResults } from "./OurResults";
import { OurSystem } from "./OurSystem";
import Ellipses from "../../assets/Ellipses.svg";

export const Content = () => {
  return (
    <S.Background>
      <div className="bg-3"></div>
      <div className="bg-4"></div>
      <div className="bg-5"></div>
      <div className="bg-6"></div>
      <S.Image src={Ellipses} />
      <Introducing />
      <OurSystem />
      <OurResults />
    </S.Background>
  );
};

const S = {
  Background: styled.div`
    position: relative;
    .bg-3,
    .bg-4 {
      background: linear-gradient(
        rgba(0, 65, 218, 0.114) 0%,
        rgb(40 0 153 / 18%) 91.72%
      );
      filter: blur(100px);
      border-radius: 2.71815e7px;
    }
    .bg-3 {
      position: absolute;
      width: 40%;
      height: 66%;
      left: -15%;
      top: 12%;
      transform: rotate(48.65deg);
    }
    .bg-4 {
      width: 706.46px;
      height: 507.73px;
      right: -132px;
      top: -5%;
      transform: rotate(80.65deg);
    }
    .bg-5,
    .bg-6 {
      filter: blur(100px);
      border-radius: 2.71815e7px;
    }
    .bg-5 {
      top: 27%;
      width: 80%;
      height: 25%;
      right: -172px;
      transform: rotate(61.5deg);
      background: linear-gradient(
        0deg,
        rgba(87, 87, 87, 0.23),
        rgb(87 87 87 / 38%)
      );
    }
    .bg-6 {
      top: 50%;
      width: 68%;
      height: 25%;
      left: 72px;
      transform: rotate(99deg);
      background: linear-gradient(
        0deg,
        rgba(87, 87, 87, 0.23),
        rgb(71 116 222 / 28%)
      );
    }
  `,
  Image: styled.img`
    position: absolute;
    right: 0;
    width: 90%;
    z-index: -1;
  `,
};
