const breakpoints = [481, 1024, 1440];

const mq = {
  md: `@media (min-width: ${breakpoints[0]}px)`,
  lg: `@media (min-width: ${breakpoints[1]}px)`,
  pc: `@media (min-width: ${breakpoints[2]}px)`,
};

export default mq;
