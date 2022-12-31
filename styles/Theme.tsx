import { createTheme } from '@mui/material/styles';
export const lightTheme = {
  body: '#ffffff',
  text: '#303437',
  toggleBackground: '#D2D2D2',
};

export const darkTheme = {
  body: '#303437',
  text: '#ffffff',
  toggleBackground: '#F1C945',
};

export type Theme = typeof lightTheme;
declare module '@mui/material/styles' {
	interface PaletteOptions {
		custom: {
			light: string;
			main: string;
			dark: string;
			contrastText: string;
			darkMode: {
				color: string;
			};
			lightMode: {
				color: string;
			};
		};
	}
  interface Palette extends PaletteOptions {}
}

const muiTheme = createTheme({
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
			darkMode: {
				color: '#303437',
			},
			lightMode: {
				color: '#ffffff',
			},
			light: '#ffa726',
			main: '#f57c00',
			dark: '#ef6c00',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

export default muiTheme;
