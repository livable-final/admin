import { css } from '@emotion/react';
import pretendard from '@/styles/font';
import Header from '@/components/common/Header';
import SideMenu from './SideMenu';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={pretendard.className} css={layoutStyles}>
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
  border: 1px solid;
`;

export default Layout;
