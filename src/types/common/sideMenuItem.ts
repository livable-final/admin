export interface SideMenuItemProps {
  title: string;
  comment: string;
  page: string;
  pageUrl: string;
  onClick: (page: string) => void;
}

export interface SideMenuItemsTexts {
  [key: string]: SideMenuItemText;
}

export interface SideMenuItemText {
  title: string;
  comment: string;
  page: string;
}
