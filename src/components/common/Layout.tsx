import { css } from '@emotion/react';
import pretendard from '@/styles/font';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={pretendard.className} css={layoutStyles}>
      {children}
    </div>
  );
}

const layoutStyles = css``;

export default Layout;
