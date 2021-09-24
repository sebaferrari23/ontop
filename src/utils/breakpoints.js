const size = {
  xs: '380px',
  sm: '768px',
  md: '1024px',
  lg: '1200px',
}

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`
}

const breakpoints = {
  size,
  device,
};

export default breakpoints;