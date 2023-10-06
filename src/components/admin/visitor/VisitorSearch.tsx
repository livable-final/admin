import { Down } from '@/assets/icons';
import VISITOR_TEXT from '@/constants/visitor';
import { getSearchVisitors } from '@/pages/api/visitor/visitorRequests';
import theme from '@/styles/theme';
import { VisitorSearchProps } from '@/types/visitor/visitor';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

function VisitorSearch({
  setVisitorList,
  setPage,
  size,
  dataPage,
  setDataPage,
}: VisitorSearchProps) {
  const [select, setSelect] = useState('COMPANY');
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { search } = VISITOR_TEXT;

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
      let queryString = `size=${size}&page=${dataPage}`;
      if (select) {
        queryString += `&queryCondition=${select}`;
      }
      if (searchText) {
        queryString += `&query=${searchText}`;
      }
      if (startDate) {
        queryString += `&startDate=${startDate}`;
      }
      if (endDate) {
        queryString += `&endDate=${endDate}`;
      }

      const response = await getSearchVisitors(queryString);
      if (response?.data) {
        setVisitorList(response.data);
        setPage(1);
        setDataPage(0);
      }
    } catch (err) {
      //  검색 오류 예외 처리
    }
  };

  return (
    <div css={container}>
      <p>검색</p>
      <div css={searchForm}>
        <div css={selectDivStyles}>
          <select id="data" onChange={(e) => onChangeSelectHandler(e)}>
            <option value="COMPANY">{search.occupantCompany}</option>
            <option value="VISITOR">{search.visitor}</option>
          </select>
          <Down />
        </div>
        <input
          type="text"
          placeholder={
            select === 'COMPANY'
              ? search.searchPlaceholder.company
              : search.searchPlaceholder.visitor
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
          {search.searchBtn}
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

const selectDivStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.greyscale.grey30};
  padding: 011px;
  word-break: keep-all;
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
  select {
    border: 0; //기본 스타일 제거
    -webkit-appearance: none; /* for chrome */
    -moz-appearance: none; /*for firefox*/
    appearance: none;
    box-sizing: border-box; //select 박스의 크기 방식 지정.
    background: transparent; //배경색 투명 처리
  }

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }

  select:focus {
    outline: none;
  }

  input {
    width: 290px;
    padding: 12px 11px;
    min-width: 100px;
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
