import { SvgIcon } from '@mui/material';
import dynamic from 'next/dynamic';
import Lamp from 'public/lamp.svg';
import { HeaderWrapper, Title } from 'styles/components/Header.style';
const Header = () => {
	const ThemeMode = dynamic(() => import('./Switch'), { ssr: false });
	return (
		<>
			<HeaderWrapper>
				<Title underline='none'>
					<SvgIcon component={Lamp} inheritViewBox fontSize={'small'} />
					꾸준함의 가치를 아는 개발자
				</Title>
				<ThemeMode />
			</HeaderWrapper>
		</>
	);
};
export default Header;
