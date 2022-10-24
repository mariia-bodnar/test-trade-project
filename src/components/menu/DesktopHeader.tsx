import styled from "styled-components";


export const DesktopHeader = () => {
  return (
    <S.DesktopHeader className="container">
      <a href="#" className="fs-25">C</a>
      <S.Wrapper>
        <S.List>
          <li><a href="#">Activities</a></li>
           <li><a href="#">Technology</a></li>
           <li><a href="#">R&D</a></li>
           <li><a href="#">Community</a></li>
        </S.List>
        <S.Button href="#">
          Career
          <span></span>
        </S.Button>
      </S.Wrapper>
    </S.DesktopHeader>
  );
};


const S = {
  DesktopHeader: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  `,
  Wrapper: styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    @media (max-width: 1325px) {
      width: 75%;
    }
  `,
  List: styled.ul`
    display: flex;
    width: 68%;
    justify-content: space-between;
    padding: 0;
    & li {
      list-style: none;
      font-size: 18px;
    }
    @media (max-width: 1325px) {
      width: 70%;
    }
  `,
  Button: styled.a`
    background: linear-gradient(140.6deg, #ffffff -27.18%, #dedede 126.06%);
    box-shadow: 0px 0px 49px rgba(42, 7, 254, 0.4);
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    color: #000000;
    align-items: center;
    padding: 16px 32px;
    gap: 8px;
    @media (max-width: 1375px) {
      padding: 14px 28px;
    }
    @media (max-width: 1199px) {
      padding: 8px 22px;
    }
    :hover {
      color: #000000;
    }
    & span {
      width: 14px;
      height: 14px;
      margin: auto;
      background: url(shape.svg) center no-repeat;
    }
    &:hover {
      cursor: pointer;
      & span {
        transform: translate3d(4px, -4px, 0);
        transition: all 0.48s ease-in-out;
      }
    }
  `,
};
