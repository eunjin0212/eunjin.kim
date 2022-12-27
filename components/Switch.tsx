import { SwitchProps } from '@mui/material/Switch';
import { ChangeEvent, useState } from 'react';
import { CustomizedSwich } from 'styles/components/Switch.style';

const ThemeMode = ((props: SwitchProps) => {
	const [mode, setMode] = useState(false);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMode(event.target.checked);
	};
	return (
		<CustomizedSwich
			checked={mode}
			onChange={handleChange}
			focusVisibleClassName='.Mui-focusVisible'
			disableRipple
			{...props}
		/>
	);
});
export default ThemeMode;