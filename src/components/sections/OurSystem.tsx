import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { getBreakpointType, breakpoints } from "../Breakpoins";
import { DesktopSchema } from "./Schemes/DesktopSchema";
import { MobileSchema } from "./Schemes/MobileSchema";

export const OurSystem = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpointType());
  const displayDesktop = useMemo(
    () => displayDesktopSchema.includes(breakpoint),
    [breakpoint]
  );
  const displayMobile = useMemo(
    () => displayMobileSchema.includes(breakpoint),
    [breakpoint]
  );

  useEffect(() => {
    const handler = () => setBreakpoint(getBreakpointType());

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [setBreakpoint]);
  return (
    <S.Section>
      <S.Wrapper className="container">
        {displayDesktop && <DesktopSchema />}
        {displayMobile && <MobileSchema />}
        <S.TextPart>
          <h2>
            The future <span className="colorGray">of</span> Cryptocurrency
            trading <span className="gradientAccent">platform</span>
          </h2>
          <p>
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <a className="gradientAccent" href="#learn-more">
            Learn more
          </a>
        </S.TextPart>
      </S.Wrapper>
    </S.Section>
  );
};
const displayDesktopSchema = ["xl"] as Array<keyof typeof breakpoints>;
const displayMobileSchema = ["s", "m", "l"] as Array<keyof typeof breakpoints>;

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
  `,
  TextPart: styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 35%;
    padding: 44px 0;
    height: fit-content;
    p {
      line-height: 1.4;
      color: #e9e9e9;
    }
    @media (max-width: 1200px) {
      width: 75%;
      max-width: inherit;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  `,
};
