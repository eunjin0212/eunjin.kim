import ShareIcon from '@mui/icons-material/Share';
import { Box, Button, SvgIcon } from '@mui/material';
import { portfolioData } from 'mock/data';
import dynamic from 'next/dynamic';
import Lamp from 'public/lamp.svg';
import { useState } from 'react';
import {
  Alert,
  HeaderToolBar,
  HeaderWrapper,
  Title
} from 'styles/components/Header.style';
import { ThemeInterface } from 'types/ThemeType';

interface ShareData {
	title: string;
	text: string;
	url: string;
}
const Header = (theme: ThemeInterface) => {
	const ThemeMode = dynamic(() => import('./Switch'), { ssr: false });
	const [showAlert, setShowAlert] = useState<boolean>(false);

	const handleShareBtn = async () => {
		const shareData: ShareData = {
			title: '꾸준함의 가치를 아는 개발자',
			text: "Ginie's Portfolio",
			url: 'https://silverzin.vercel.app/',
		};
		try {
			await navigator.share(shareData);
			setShowAlert(true);
		} catch (error) {
			navigator.clipboard.writeText(shareData.url);
			setShowAlert(true);
		}
	};
	const handleAlert = () => {
		setShowAlert(false);
	};
	return (
		<>
			<HeaderWrapper component='nav' enableColorOnDark>
				<HeaderToolBar>
					<Title underline='none'>
						<SvgIcon component={Lamp} inheritViewBox fontSize={'small'} />
						{portfolioData.title}
					</Title>
					<Box>
						<Button
							color='inherit'
							aria-label='share'
							size='small'
							startIcon={<ShareIcon fontSize='inherit' />}
							onClick={handleShareBtn}>
							공유
						</Button>
						<ThemeMode />
					</Box>
				</HeaderToolBar>
			</HeaderWrapper>
			<Alert
				onClose={handleAlert}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				autoHideDuration={2000}
				open={showAlert}
				message='클립보드에 복사되었습니다.'
			/>
		</>
	);
};
export default Header;
