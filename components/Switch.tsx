import { SwitchProps } from '@mui/material/Switch';
import { ChangeEvent, useEffect, useState } from 'react';
import { CustomizedSwich } from 'styles/components/Switch.style';

const ThemeMode = (props: SwitchProps) => {
	console.log();
	const [mode, setMode] = useState<boolean>(false);
  useEffect(() => {
    setMode(Boolean(window.localStorage.getItem('mode') === 'true'))
  }, [])
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMode(event.target.checked);
		window.localStorage.setItem('mode', JSON.stringify(event.target.checked));
	};
	useEffect(() => {
		document.body.dataset.theme = mode ? 'dark' : 'light';
	}, [mode]);
	return (
		<CustomizedSwich
			checked={mode}
			onChange={handleChange}
			focusVisibleClassName='.Mui-focusVisible'
			disableRipple
			{...props}
		/>
	);
};
export default ThemeMode;
