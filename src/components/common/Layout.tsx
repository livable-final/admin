import { css } from '@emotion/react';
import notoSansKR from '@/styles/font';
import Header from '@/components/common/Header';
import theme from '@/styles/theme';
import SideMenu from './SideMenu';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={notoSansKR.variable} css={layoutStyles}>
      <Header />
      <div css={bodyStyles}>
        <SideMenu />
        <div css={contentStyles}>{children}</div>
      </div>
    </div>
  );
}

const layoutStyles = css``;

const bodyStyles = css`
  display: flex;
`;

const contentStyles = css`
  width: 100%;
  margin: 20px;
  padding: 40px 24px;
  border-radius: 16px;
  background-color: ${theme.palette.white};
  height: calc(100vh - 130px);
  overflow: auto;
`;

export default Layout;
