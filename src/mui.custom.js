export const customConfig = {
  palette: {
    primary: {
      main: '#212121',
      light: '#f1f5ff',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#f8324526',
    },
    feedback: {
      main: '#43a047',
      light: '#66bb6a',
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
