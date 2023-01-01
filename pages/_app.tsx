import { ThemeProvider } from '@mui/material/styles';
import Header from 'components/Header';
import { useDarkMode } from 'hooks/useDarkMode';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import muiTheme, { lightTheme } from 'styles/Theme';
import { Theme } from 'types/ThemeType';
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
				<Header theme={theme} />
				<Component theme={theme} {...pageProps} />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
