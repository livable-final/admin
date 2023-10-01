import { getSearchVisitors } from '@/pages/api/visitor/visitorRequests';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

function VisitorSearch() {
  const [select, setSelect] = useState('COMPANY');
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const onChangeSearchTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onChangeStartDateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const onChangeEndDateHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const onClickHandler = async () => {
    try {
      const response = await getSearchVisitors(
        1,
        5,
        select,
        searchText,
        startDate,
        endDate,
      );
      if (response?.data) {
        console.log('test');
      }
    } catch (err) {
      //  검색 오류 예외 처리
    }
  };

  return (
    <div css={container}>
      <p>검색</p>
      <div css={searchForm}>
        <select onChange={(e) => onChangeSelectHandler(e)}>
          <option value="COMPANY">입주사명</option>
          <option value="VISITOR">방문자명</option>
        </select>
        <input
          type="text"
          placeholder={
            select === 'COMPANY'
              ? '검색하실 입주사명을 입력해주세요'
              : '검색하실 방문자명을 입력해주세요'
          }
          onChange={(e) => onChangeSearchTextHandler(e)}
        />
        <input type="date" onChange={(e) => onChangeStartDateHandler(e)} />
        <p>~</p>
        <input type="date" onChange={(e) => onChangeEndDateHandler(e)} />
        <button
          type="button"
          onClick={() => {
            onClickHandler();
          }}
        >
          검색
        </button>
      </div>
    </div>
  );
}
const container = css`
  p {
    color: ${theme.palette.title};
    font: ${theme.font.body.body1_600};
  }
`;

const searchForm = css`
  display: flex;
  align-items: center;
  gap: 8px;

  input,
  select,
  button {
    border-radius: 8px;
    border: 1px solid ${theme.palette.greyscale.grey30};
    padding: 10px 11px;
    word-break: keep-all;
  }

  input {
    width: 290px;
    padding: 12px 11px;
  }

  button {
    color: ${theme.palette.greyscale.grey30};
  }
  button:hover {
    color: ${theme.palette.greyscale.grey90};
  }

  select [value=''] {
    color: ${theme.palette.greyscale.grey30};
  }

  select option[value=''][disabled] {
    color: ${theme.palette.greyscale.grey30};
  }
`;
export default VisitorSearch;
