import { Left, Right } from '@/assets/icons';
import theme from '@/styles/theme';
import { VisitorListPagenationProps } from '@/types/visitor/visitor';
import { css } from '@emotion/react';

function VisitorListPagenation({
  limit,
  page,
  totalVisitors,
  setPage,
}: VisitorListPagenationProps) {
  const numPages = Math.ceil(totalVisitors / limit);

  const arr = Array.from(Array(numPages).keys());

  const onClickHandler = (num: number) => {
    if (num > 0 && num <= numPages) {
      setPage(num);
    }
  };

  return (
    <div css={containerStyles}>
      <button type="button" onClick={() => onClickHandler(page - 1)}>
        <Left />
      </button>
      {arr.map((itme) => {
        return (
          <button
            type="button"
            key={itme}
            onClick={() => onClickHandler(itme + 1)}
          >
            {page === itme + 1 ? <p>{itme + 1}</p> : itme + 1}
          </button>
        );
      })}
      <button type="button" onClick={() => onClickHandler(page + 1)}>
        <Right />
      </button>
    </div>
  );
}

const containerStyles = css`
  display: flex;

  button {
    width: 44px;
    height: 44px;
    cursor: pointer;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 22px;
    background-color: ${theme.palette.primary};
    color: ${theme.palette.white};
  }
`;

export default VisitorListPagenation;
