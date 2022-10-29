import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { getBreakpointType,breakpoints } from "../Breakpoins";

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


const displayDesktopHeader = [ "xl"] as Array<keyof typeof breakpoints>;
const displayMobileHeader = ["s", "m", "l"] as Array<keyof typeof breakpoints>;