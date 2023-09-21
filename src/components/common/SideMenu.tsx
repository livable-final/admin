import theme from '@/styles/theme';
import { css } from '@emotion/react';
import SideMenuItem from '@/components/common/SideMenuItem';
import { COMMON_PAGES_TITLE } from '@/constants/common';

function SideMenu() {
  const menu = COMMON_PAGES_TITLE;
  return (
    <div css={sideMenuStyles}>
      <ul>
        {Object.keys(menu).map((keyMenu) => {
          if (keyMenu !== 'setting') {
            return (
              <li key={keyMenu}>
                <SideMenuItem
                  title={menu[keyMenu].title}
                  comment={menu[keyMenu].comment}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
      <ul css={bottomListStyles}>
        <li>
          <SideMenuItem
            title={menu.setting.title}
            comment={menu.setting.comment}
          />
        </li>
      </ul>
    </div>
  );
}

const sideMenuStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${theme.palette.white};
  margin-top: 3px;
  padding-bottom: 24px;

  width: 236px;
  height: calc(100vh - 100px);

  li {
    border-bottom: 1px solid ${theme.palette.greyscale.grey20};
  }
`;

const bottomListStyles = css`
  width: 100%;
  border-top: 1px solid ${theme.palette.greyscale.grey20};
`;

export default SideMenu;
