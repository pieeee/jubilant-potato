export const customConfig = {
  palette: {
    primary: {
      main: '#262239',
      light: '#f1f5ff',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#f8324526',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
  },
}