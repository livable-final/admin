import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { SideMenuItemProps } from '@/types/common/sideMenuItem';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

function SideMenuItem({
  title,
  comment,
  page,
  pageUrl,
  onClick,
}: SideMenuItemProps) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`./${page}`);
    onClick(page);
  };

  return (
    <button
      type="button"
      title={comment}
      css={sideMenuItemStyles}
      onClick={onClickHandler}
    >
      {pageUrl === page ? (
        <>
          <Icons icon={page} color={theme.palette.primary} />
          <p>
            <span>{title}</span>
          </p>
        </>
      ) : (
        <>
          <Icons icon={page} color={theme.palette.greyscale.grey20} />
          <p>{title}</p>
        </>
      )}
    </button>
  );
}

const sideMenuItemStyles = css`
  display: flex;
  gap: 5px;
  padding: 20px 28px;
  font: ${theme.font.body.body1_500};
  color: ${theme.palette.greyscale.grey50};
  cursor: pointer;

  &:hover {
    color: ${theme.palette.primary};
    svg {
      fill: ${theme.palette.primary};
    }
  }

  span {
    color: ${theme.palette.primary};
  }
`;

export default SideMenuItem;
