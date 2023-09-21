import { css } from '@emotion/react';
import testList from './testList';

function VisitorList() {
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
        {testList.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" />
              <p>{item.InvitationTime}</p>
              <p>{item.visitTime}</p>
              <p>
                {item.invitationCompany}
                <br />
                {item.inviter}
              </p>
              <p>{item.visitor}</p>
              <p>{item.place}</p>
              <p>
                {item.EntryTime}
                <br />
                {item.ExitTime}
              </p>
              <p>{item.carNumber}</p>
              <p>{item.parkingTime}</p>
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

  li:first-child {
    background-color: #f4f4f5;
  }

  li > * {
    flex: 1;
    word-break: keep-all;
    text-align: center;
  }
`;
export default VisitorList;
