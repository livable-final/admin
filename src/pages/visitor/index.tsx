import Visitor from '@/components/admin/visitor';
import Button from '@/components/common/Button';
import PageTitle from '@/components/common/PageTitle';
import { COMMON_PAGES_TITLE } from '@/constants/common';
import { css } from '@emotion/react';

function Index() {
  const page = COMMON_PAGES_TITLE.visitor;

  return (
    <div css={containerStyles}>
      <PageTitle title={page.title} comment={page.comment} />
      <Button content="방문자 추가" variant="blue" />

      <hr />

      <Visitor />
    </div>
  );
}

const containerStyles = css`
  min-width: 1024px;
  hr {
    margin-top: 28px;
    height: 1px;
    background-color: #d1d5db;
    border: 0;
  }
`;

export default Index;
