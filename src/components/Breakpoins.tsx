export const getBreakpointType = (): keyof typeof breakpoints => {
  if (window.innerWidth <= 576) return "s";
  if (window.innerWidth > 576 && window.innerWidth <= 767) return "m";
  if (window.innerWidth > 767 && window.innerWidth <= 920) return "l";
 return 'xl';
};



export const breakpoints = {
  s: 576,
  m: 767,
  l: 920,
  xl: 1200
};
