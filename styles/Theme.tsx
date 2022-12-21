import type { } from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    custom: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  }
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#ff4400',
		},
		secondary: {
			light: '#0066ff',
			main: '#0044ff',
			contrastText: '#ffcc00',
		},
		custom: {
			light: '#ffa726',
			main: '#f57c00',
			dark: '#ef6c00',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

export default theme;
