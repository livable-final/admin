import { css } from '@emotion/react';
import VisitorExcelDownBtn from '@/components/admin/visitor/VisitorExcelDownBtn';
import theme from '@/styles/theme';
import { VisitorExcelDownProps } from '@/types/visitor/visitor';

function VisitorExcelDown({ checkVisitors }: VisitorExcelDownProps) {
  return (
    <div css={container}>
      <p>
        총 <span>{checkVisitors}명</span>의 방문자가 조회되었습니다.
      </p>
      <VisitorExcelDownBtn />
    </div>
  );
}

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p > span {
    color: ${theme.palette.primary};
  }
`;
export default VisitorExcelDown;
