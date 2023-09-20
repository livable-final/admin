import theme from '@/styles/theme';
import { Global, css } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={globals} />;
}

const globals = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }
  svg {
    cursor: pointer;
  }

  body {
    background-color: #f4f4f5;
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* 파이어폭스 */
  }

  /********* 스크롤 바 **********/
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.palette.primary};
    border-radius: 5px;
    background-clip: padding-box;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /*******************************/

  li {
    list-style: none;
  }

  textarea {
    &::placeholder {
      color: ${theme.palette.greyscale.grey40};
    }
    &:focus {
      outline: none;
      color: ${theme.palette.greyscale.grey90};
    }
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
