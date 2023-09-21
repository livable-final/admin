import VisitorExcelDown from '@/components/admin/visitor/VisitorExcelDown';
import VisitorList from '@/components/admin/visitor/VisitorList';
import VisitorSearch from '@/components/admin/visitor/VisitorSearch';
import Button from '@/components/common/Button';
import PageTitle from '@/components/common/PageTitle';
import { COMMON_PAGES_TITLE } from '@/constants/common';
import { css } from '@emotion/react';

function index() {
  const page = COMMON_PAGES_TITLE.visitor;
  return (
    <div css={containerStyles}>
      <PageTitle title={page.title} comment={page.comment} />
      <Button content="방문자 추가" variant="blue" />

      <hr />

      <div css={contentStyles}>
        <VisitorSearch />
        <VisitorExcelDown />
        <VisitorList />
      </div>
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

const contentStyles = css`
  & > * {
    padding-top: 20px;
  }
`;

export default index;
