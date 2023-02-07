import { AppBar, Link, Snackbar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
export const HeaderWrapper = styled(AppBar)({
	padding: '0 0.75rem',
	height: '45px',
	width: '100vw',
	'&.MuiAppBar-root': {
		boxShadow: 'none',
		'.MuiBox-root': {
			'.MuiIconButton-sizeSmall': {
				fontSize: '1rem',
			},
		},
	},
}) as typeof AppBar;
export const HeaderToolBar = styled(Toolbar)({
}) as typeof Toolbar;
export const Title = styled(Link)({
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	fontSize: '14px',
	height: '20px',
	display: 'inline-flex',
	flexWrap: 'nowrap',
	alignItems: 'center',
	'.MuiSvgIcon-root': {
		width: '17.76px',
		height: '17.76px',
		marginRight: '6px',
	},
}) as typeof Link;

export const Alert = styled(Snackbar)({
	'.MuiSnackbarContent-root': {
		justifyContent: 'center',
	},
}) as typeof Snackbar;
