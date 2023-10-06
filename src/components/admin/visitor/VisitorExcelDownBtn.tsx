import { Excel } from '@/assets/icons';
import VISITOR_TEXT from '@/constants/visitor';

import theme from '@/styles/theme';
import { css } from '@emotion/react';

function Button() {
  const onClick = () => {};
  const { excelDown } = VISITOR_TEXT;
  return (
    <button type="button" css={buttonStyles} onClick={onClick}>
      <Excel />
      <span>{excelDown}</span>
    </button>
  );
}

const buttonStyles = css`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border-radius: 8px;
  padding: 8px 12px;

  color: #21a366;
  border: 1px solid #21a366;

  font: ${theme.font.body.body1_600};

  &:active {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }

  span {
    margin-left: 8px;
    word-break: keep-all;
  }
`;

export default Button;
