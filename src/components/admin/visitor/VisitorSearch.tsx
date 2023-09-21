import theme from '@/styles/theme';
import { css } from '@emotion/react';

function VisitorSearch() {
  return (
    <div css={container}>
      <p>검색</p>
      <div css={searchForm}>
        <select required defaultValue="">
          <option value="" disabled>
            입주사명
          </option>
          <option value="식스센스">식스센스</option>
          <option value="식스센스식스센스">식스센스식스센스</option>
        </select>
        <input type="text" placeholder="검색하실 입주사명을 입력해주세요" />
        <input type="date" />
        <p>~</p>
        <input type="date" />
        <button type="button">검색</button>
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
