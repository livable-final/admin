import theme from '@/styles/theme';
import { SideMenuItemProps } from '@/types/common/sideMenuItem';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

function SideMenuItem({ title, comment, page }: SideMenuItemProps) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`./${page}`);
  };
  return (
    <button
      type="button"
      title={comment}
      css={sideMenuItemStyles}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
}

const sideMenuItemStyles = css`
  padding: 20px 28px;
  font: ${theme.font.body.body1_500};
  color: ${theme.palette.greyscale.grey50};
  cursor: pointer;

  &:hover {
    color: ${theme.palette.primary};
  }
`;

export default SideMenuItem;
