import { SwitchProps } from '@mui/material/Switch';
import { ThemeContext } from 'pages/_app';
import { useContext } from 'react';
import { CustomizedSwich } from 'styles/components/Switch.style';
import { darkTheme } from 'styles/Theme';

const ThemeMode = (props: SwitchProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<CustomizedSwich
			checked={theme === darkTheme}
			onChange={toggleTheme}
			focusVisibleClassName='.Mui-focusVisible'
			disableRipple
			{...props}
		/>
	);
};
export default ThemeMode;
