import PageTitle from '@/components/common/PageTitle';
import { COMMON_PAGES_TITLE } from '@/constants/common';
import { css } from '@emotion/react';

function index() {
  const page = COMMON_PAGES_TITLE.complaints;
  return (
    <div css={containerStyles}>
      <PageTitle title={page.title} comment={page.comment} />

      <hr />
    </div>
  );
}

const containerStyles = css`
  hr {
    margin-top: 28px;
    height: 1px;
    background-color: #d1d5db;
    border: 0;
  }
`;

export default index;
