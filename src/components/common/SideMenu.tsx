import theme from '@/styles/theme';
import { css } from '@emotion/react';
import SideMenuItem from '@/components/common/SideMenuItem';
import { COMMON_PAGES_TITLE } from '@/constants/common';
import { useState } from 'react';

function SideMenu() {
  const [pageUrl, setPageUrl] = useState('');
  const menu = COMMON_PAGES_TITLE;

  const onClickHandler = (page: string) => {
    setPageUrl(page);
  };
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
                  page={menu[keyMenu].page}
                  onClick={onClickHandler}
                  pageUrl={pageUrl}
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
            page={menu.setting.page}
            onClick={onClickHandler}
            pageUrl={pageUrl}
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
  overflow: auto;

  li {
    border-bottom: 1px solid ${theme.palette.greyscale.grey20};
  }
`;

const bottomListStyles = css`
  width: 100%;
  border-top: 1px solid ${theme.palette.greyscale.grey20};
`;

export default SideMenu;
