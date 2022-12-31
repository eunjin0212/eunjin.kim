import { ThemeProvider } from '@mui/material/styles';
import { useDarkMode } from 'hooks/useDarkMode';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import muiTheme, { lightTheme, Theme } from 'styles/Theme';

interface ContextProps {
	theme: Theme;
	toggleTheme: () => void;
}
export const ThemeContext = createContext<ContextProps>({
	theme: lightTheme, // 테마(라이트, 다크)
	toggleTheme: () => {
		// 테마 변경하는 함수
		return null;
	},
});

export default function App({ Component, pageProps }: AppProps) {
	const { theme, toggleTheme } = useDarkMode();
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={muiTheme}>
				<GlobalStyle theme={theme} />
				<Component {...pageProps} />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
