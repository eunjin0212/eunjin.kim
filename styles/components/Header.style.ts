import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 12px;
	height: 45px;
	width: 100vw;
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
