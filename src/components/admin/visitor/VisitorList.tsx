import { VisitorListProps } from '@/types/visitor/visitor';
import { css } from '@emotion/react';

function VisitorList({ content }: VisitorListProps) {
  return (
    <div css={container}>
      <ul>
        <li>
          <input type="checkbox" />
          <p>초대일시</p>
          <p>방문일시</p>
          <p>입주사/초대사</p>
          <p>방문자</p>
          <p>방문장소</p>
          <p>입차시각 / 출차시각</p>
          <p>차량번호</p>
          <p>주차시간</p>
        </li>
        {content &&
          content.map((item) => {
            return (
              <li key={item.invitationId}>
                <input type="checkbox" />
                <p>{item.visitTime}</p>
                <p>{item.visitTime}</p>
                <p>
                  {item.company}
                  <br />
                  {item.host}
                </p>
                <p>{item.visitorName}</p>
                <p>{item.officeName}</p>
                <p>
                  {item.inTime}
                  <br />
                  {item.outTime}
                </p>
                <p>{item.carNumber}</p>
                <p>{item.stayTime}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const container = css`
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #6b7280;

    min-height: 83px;
  }

  li:first-of-type {
    background-color: #f4f4f5;
  }

  li > * {
    flex: 1;
    word-break: keep-all;
    text-align: center;
  }
`;
export default VisitorList;
