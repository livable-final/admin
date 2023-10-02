import { GetVisitorsData } from '@/types/visitor/api';
import { css } from '@emotion/react';
import dayjs from 'dayjs';

function VisitorList({ content }: GetVisitorsData) {
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
              <li key={item.visitorId}>
                <input type="checkbox" />
                <p>
                  {item.startDateTime &&
                    dayjs(item.startDateTime).format('YYYY-MM-DD hh:mm')}
                </p>
                <p>
                  {item.visitTime &&
                    dayjs(item.visitTime).format('YYYY-MM-DD h:m')}
                </p>
                <p>
                  {item.company}
                  <br />
                  {item.host}
                </p>
                <p>{item.visitorName}</p>
                <p>{item.officeName}</p>
                <p>
                  {item.inTime && dayjs(item.inTime).format('YYYY-MM-DD h:m')}
                  <br />
                  {item.outTime && dayjs(item.outTime).format('YYYY-MM-DD h:m')}
                </p>
                <p>{item.carNumber}</p>
                <p>
                  {item.stayTime &&
                    dayjs(item.stayTime).format('YYYY-MM-DD h:m')}
                </p>
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
