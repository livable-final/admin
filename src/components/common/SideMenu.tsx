import theme from '@/styles/theme';
import { css } from '@emotion/react';

function SideMenu() {
  return <div css={SideMenuStyles}>SideMenu</div>;
}

const SideMenuStyles = css`
  background-color: ${theme.palette.white};
  margin-top: 3px;
  border: 1px solid;
  width: 236px;
  height: calc(100vh - 100px);
`;
export default SideMenu;
