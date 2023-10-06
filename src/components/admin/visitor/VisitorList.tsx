import VISITOR_TEXT from '@/constants/visitor';
import { GetVisitorsData } from '@/types/visitor/api';
import { css } from '@emotion/react';
import dayjs from 'dayjs';

function VisitorList({ content }: GetVisitorsData) {
  const { listForm, nullData } = VISITOR_TEXT;
  return (
    <div css={container}>
      <ul>
        <li>
          <input type="checkbox" />
          <p>{listForm.invitationTime}</p>
          <p>{listForm.visitTime}</p>
          <p>
            {listForm.occupantCompany}/{listForm.inviter}
          </p>
          <p>{listForm.visitor}</p>
          <p>{listForm.place}</p>
          <p>
            {listForm.inTime} / {listForm.outTime}
          </p>
          <p>{listForm.carNumber}</p>
          <p>{listForm.parkingTime}</p>
        </li>
        {content.length ? (
          content.map((item) => {
            return (
              <li key={item.visitorId}>
                <input type="checkbox" />
                <p>
                  {item.startDateTime &&
                    dayjs(item.startDateTime).format('YYYY-MM-DD HH:mm')}
                </p>
                <p>
                  {item.visitTime &&
                    dayjs(item.visitTime).format('YYYY-MM-DD HH:m')}
                </p>
                <p>
                  {item.company}
                  <br />
                  {item.host}
                </p>
                <p>{item.visitorName}</p>
                <p>{item.officeName}</p>
                <p>
                  {item.inTime && dayjs(item.inTime).format('YYYY-MM-DD HH:m')}
                  <br />
                  {item.outTime &&
                    dayjs(item.outTime).format('YYYY-MM-DD HH:m')}
                </p>
                <p>{item.carNumber}</p>
                {item.stayTime ? <p>{item.stayTime}분</p> : <p />}
              </li>
            );
          })
        ) : (
          <li>
            <p>{nullData}</p>
          </li>
        )}
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
