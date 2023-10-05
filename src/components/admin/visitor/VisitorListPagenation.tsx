import { Left, LeftDisabled, Right, RightDisabled } from '@/assets/icons';
import theme from '@/styles/theme';
import { VisitorListPagenationProps } from '@/types/visitor/visitor';
import { css } from '@emotion/react';

function VisitorListPagenation({
  limit,
  page,
  totalVisitors,
  setPage,
  dataPage,
  setDataPage,
  size,
  dataLength,
}: VisitorListPagenationProps) {
  const numPages = Math.ceil(totalVisitors / limit);

  const arr = Array.from(Array(numPages).keys());

  const onClickPageHandler = (num: number) => {
    if (num > 0 && num <= numPages) {
      setPage(num);
    }
  };

  const onClickDataPageHandler = (num: number) => {
    if (num >= 0) {
      setDataPage(num);
      setPage(1);
    }
  };

  return (
    <div css={containerStyles}>
      {dataPage === 0 ? (
        <button disabled type="button">
          <LeftDisabled />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onClickDataPageHandler(dataPage - 1)}
        >
          <Left />
        </button>
      )}

      {arr.map((itme) => {
        return (
          <button
            type="button"
            key={itme}
            onClick={() => onClickPageHandler(itme + 1)}
          >
            {page === itme + 1 ? <p>{itme + 1}</p> : itme + 1}
          </button>
        );
      })}
      {dataLength === size ? (
        <button
          type="button"
          onClick={() => onClickDataPageHandler(dataPage + 1)}
        >
          <Right />
        </button>
      ) : (
        <button disabled type="button">
          <RightDisabled />
        </button>
      )}
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
