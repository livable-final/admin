import theme from '@/styles/theme';
import { PageTitleProps } from '@/types/common/pageTitle';
import { css } from '@emotion/react';

function SideMenuItem({ title, comment }: PageTitleProps) {
  return (
    <div title={comment} css={sideMenuItemStyles}>
      {title}
    </div>
  );
}

const sideMenuItemStyles = css`
  padding: 20px 28px;
  font: ${theme.font.body.body1_500};
  color: ${theme.palette.greyscale.grey50};
`;

export default SideMenuItem;
