import styled, { css } from "styled-components";
import { useCallback, useRef, useState } from "react";
import { MouseEvent } from "react";

export const MobileHeader = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = useCallback(() => {
    setShowMenu((prev) => !prev);
    setInitialLoad(false);
  }, [setShowMenu, setInitialLoad]);

  return (
    <>
      <S.MobileHeader className="container">
        <S.Wrapper >
          <a className="fs-25" href="#">
            C
          </a>
          <S.OpenMenuButton $isActive={showMenu} onClick={clickHandler}>
            <span></span>
            <span></span>
          </S.OpenMenuButton>
        </S.Wrapper>

        {!initialLoad &&
        <>
        <S.BoxForAnimation $isActive={showMenu}/>
         <S.List $isActive={showMenu}>
          <li>
            <a href="#">Activities</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">R&D</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </S.List>
       
        </>
        }
      </S.MobileHeader>
    </>
  );
};

const S = {
  MobileHeader: styled.header`
    padding: 22px 0px;
    @media (max-width: 576px) {
      padding: 16px 0px;
    }
  `,
  BoxForAnimation: styled.div<{ $isActive?: boolean }>`
  ${(p) =>
    p.$isActive
      ? css`
          animation: "toggleSlide" 0.6s;
          transition: all 1s;
          margin-bottom: 100px;
        `
      : css`
          animation: "toggleUpSlide" 0.6s;
          transition: all 1s;
          margin-bottom: 0px;
        `};
  @keyframes toggleSlide {
    100% {
      margin-bottom: 100px;
    }
  }
  @keyframes toggleUpSlide {
    0% {
      margin-bottom: 100px;
    }
    100% {
      margin-bottom: 0px;
    }
  }
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
  `,
  OpenMenuButton: styled.div<{ $isActive?: boolean }>`
    ${(p) =>
      p.$isActive
        ? css`
            & {
              cursor: pointer;
              gap: 0;
            }
            span:first-child {
              animation: "rotateRight" 0.4s;
              transform: rotate(45deg);
              background-color: var(--accent-fill);
            }
            span:last-child {
              animation: "rotateLeft" 0.4s;
              transform: rotate(-45deg);
              background-color: var(--accent-fill);
            }
          `
        : css`
            span:first-child {
              animation: "rotateRightBack" 0.4s;
              transform: rotate(0deg);
            }
            span:last-child {
              animation: "rotateLeftBack" 0.4s;
              transform: rotate(0deg);
            }
          `};
    @keyframes rotateRight {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(45deg);
      }
    }
    @keyframes rotateRightBack {
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes rotateLeft {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-45deg);
      }
    }
    @keyframes rotateLeftBack {
      100% {
        transform: rotate(0deg);
      }
    }

    display: flex;
    flex-direction: column;
    height: auto;
    width: 32px;
    gap: 8px;
    z-index: 4;
    justify-content: center;
    & span {
      width: 100%;
      animation: none;
      height: 2px;
      background-color: #fff;
    }
    &:hover {
      transition: all 0.48s ease-in-out;
      span {
        background-color: var(--accent-fill);
      }
      cursor: pointer;
    }
  `,
  List: styled.ul<{ $isActive?: boolean }>`
    ${(p) =>
      p.$isActive
        ? css`
            & {
              animation: "slideDown" 0.6s;
              display: flex;
            }
          `
        : css`
            & {
              animation: "slideUp" 0.6s;
              opacity: 0;
              z-index: -1;
            }
          `};
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 90%;
    padding: 0;
    transition: all 1s ease-in-out;
    animation: "slideDown" 0.6s;
    transform: translateY(-90px);
    @keyframes slideDown {
      from {
        transform: translateY(-150px);
        z-index: 0;
        display: none;
      }
      to {
        transform: translateY(-90px);
        z-index: 2;
        display: flex;
      }
    }
    @keyframes slideUp {
      from {
        transform: translateY(-90px);
        z-index: 0;
        opacity: 1;
        display: flex;
      }
      to {
        transform: translateY(-150px);
        z-index: -1;
        opacity: 0;
      }
    }
    & li {
      list-style: none;
      padding: 2px;
      display: flex;
      justify-content: space-around;
      a {
        z-index: 4;
        text-shadow: 1px 2px 3px #666;
      }
    }
  `,
};
