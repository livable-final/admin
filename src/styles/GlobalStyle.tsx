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

  ::-webkit-scrollbar {
    display: none; /* 웹킷 기반 브라우저 (Chrome, Safari...) */
  }

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
