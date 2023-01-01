import { lightTheme } from 'styles/Theme';

export interface ThemeInterface {
	theme: {
		body: string;
		text: string;
		toggleBackground: string;
	};
}

export type Theme = typeof lightTheme;
