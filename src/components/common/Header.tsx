import { ChevronRight, Notification, User } from '@/assets/icons';
import { PROJECT_NAME } from '@/constants/common';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/');
  };
  return (
    <div css={headerStyles}>
      <button type="button" css={titleStyles} onClick={onClickHandler}>
        {PROJECT_NAME}
      </button>
      <div css={headerRightStyles}>
        <button type="button">
          <Notification />
        </button>
        <button type="button">
          <User />
        </button>
        <p>관리자님</p>
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
  cursor: pointer;
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
