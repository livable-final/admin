import theme from '@/styles/theme';
import { CategoryColorsProps } from '@/types/common/category';


// 공통 카테고리 색상
export const COMMON_CATEGORY_COLORS: CategoryColorsProps = {
  blue: {
    border: `2px solid ${theme.palette.primary}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.primary}`,
  },
  grey: {
    border: `2px solid ${theme.palette.greyscale.grey20}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.greyscale.grey40}`,
  },
};