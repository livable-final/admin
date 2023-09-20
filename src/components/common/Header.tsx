import { ChevronRight, Notification, User } from '@/assets/icons';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function Header() {
  return (
    <div css={headerStyles}>
      <p css={titleStyles}>오피스너</p>
      <div css={headerRightStyles}>
        <button type="button">
          <Notification />
        </button>
        <button type="button">
          <User />
        </button>
        <p>000님</p>
        <button type="button" css={arrowStyles}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

const headerStyles = css`
  background-color: ${theme.palette.white};
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.palette.greyscale.grey30};

  padding: 22px 24px;
`;

const titleStyles = css`
  color: ${theme.palette.bluescale.blue60};
  font-family: 'Godo M';
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const headerRightStyles = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const arrowStyles = css`
  padding: 0 10px;
`;
export default Header;
