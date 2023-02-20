import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainWrapper = styled(Box)`
	margin: 10% auto 0;
	width: 40%;
`;
export const Title = styled(Typography)`
	margin-top: 8%;
	font-weight: 900;
`;
export const Caption = styled(Typography)`
	font-style: italic;
	font-size: 20px;
	margin-top: 25px;
`;
export const IntroHeader = styled(Stack)({
	'> svg': {
		width: '124px',
		height: '124px',
	},
});
export const IntroBody = styled(Grid)``;
export const Item = styled(Avatar)`
	width: 100%;
  height: 100%;
`;
export const ExplanationBox = styled(Stack)``;
export const Emphasis = styled('b')``;
