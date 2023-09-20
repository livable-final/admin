import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { PageTitleProps } from '@/types/common/pageTitle';

function PageTitle({ title, comment }: PageTitleProps) {
  return (
    <div>
      <p css={titleStyles}>{title}</p>
      <p css={commentsStyles}>{comment}</p>
    </div>
  );
}

const titleStyles = css`
  color: ${theme.palette.title};
  font: ${theme.font.title.title1};
`;

const commentsStyles = css`
  padding: 20px 0;
  color: ${theme.palette.title};
  font: ${theme.font.body.body1_400};
`;

export default PageTitle;
