export interface SideMenuItemProps {
  title: string;
  comment: string;
  page: string;
}

export interface SideMenuItemsProps {
  [key: string]: SideMenuItemProps;
}
