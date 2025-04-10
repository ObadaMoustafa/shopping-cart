import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#367e8c',
    },
    secondary: {
      main: '#373d3d',
    },
    text: {
      primary: '#000000',
      secondary: '#367e8c',
      disabled: 'rgba(94,94,94,0.55)',
      hint: 'rgba(199,28,31,0.38)',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
});
