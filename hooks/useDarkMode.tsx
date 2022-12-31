import { useEffect, useState } from 'react';
import { darkTheme, lightTheme, Theme } from 'styles/Theme';

export const useDarkMode = () => {
	const [theme, setTheme] = useState<Theme>(lightTheme);

	const setMode = (mode: Theme) => {
		mode === lightTheme
			? window.localStorage.setItem('theme', 'light')
			: window.localStorage.setItem('theme', 'dark');
		setTheme(mode);
	};

	const toggleTheme = () => {
		theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		if (!localTheme) return;
		if (localTheme === 'dark') {
			setTheme(darkTheme);
			return;
		}
		setTheme(lightTheme);
	}, []);

	return { theme, toggleTheme };
};
