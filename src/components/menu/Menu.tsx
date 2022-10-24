import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Menu = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpointType());
  const displayDesktop = useMemo(
    () => displayDesktopHeader.includes(breakpoint),
    [breakpoint]
  );
  const displayMobile = useMemo(
    () => displayMobileHeader.includes(breakpoint),
    [breakpoint]
  );

  useEffect(() => {
    const handler = () => setBreakpoint(getBreakpointType());

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [setBreakpoint]);

  return (
    <>
      {displayDesktop && <DesktopHeader/>}
      {displayMobile && <MobileHeader/>}
    </>
  );
};

const getBreakpointType = (): keyof typeof breakpoints => {
  if (window.innerWidth <= 576) return "s";
  if (window.innerWidth > 576 && window.innerWidth <= 767) return "m";
  if (window.innerWidth > 767 && window.innerWidth <= 920) return "l";
 return 'xl';
};

const displayDesktopHeader = [ "xl"] as Array<keyof typeof breakpoints>;
const displayMobileHeader = ["s", "m", "l"] as Array<keyof typeof breakpoints>;

const breakpoints = {
  s: 576,
  m: 767,
  l: 920,
  xl: 1200
};

 