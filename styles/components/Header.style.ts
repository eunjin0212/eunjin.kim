import { AppBar, Link, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
export const HeaderWrapper = styled(AppBar)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 12px;
	height: 45px;
	width: 100vw;
	&.MuiAppBar-root {
		box-shadow: none;
		.MuiBox-root {
			.MuiIconButton-sizeSmall {
				font-size: 14px;
			}
		}
	}
`;
export const Title = styled(Link)`
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 14px;
	height: 20px;
	display: inline-flex;
	flex-wrap: nowrap;
	align-items: center;
	.MuiSvgIcon-root {
		width: 17.76px;
		height: 17.76px;
		margin-right: 6px;
	}
`;

export const Alert = styled(Snackbar)``;
