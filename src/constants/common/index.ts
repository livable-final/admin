import theme from '@/styles/theme';
import { ButtonColorsProps } from '@/types/common/button';
import { SideMenuItemsTexts } from '@/types/common/sideMenuItem';

// 공통 버튼 색상
export const COMMON_BUTTON_COLORS: ButtonColorsProps = {
  blue: {
    background: `${theme.palette.bluescale.blue60}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.bluescale.blue20}`,
  },
  grey: {
    background: `${theme.palette.greyscale.grey30}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.greyscale.grey10}`, // 추후 업데이트 필요
  },
  secondaryBlue: {
    background: `${theme.palette.white}`,
    color: `${theme.palette.bluescale.blue60}`,
  },
  secondaryGrey: {
    background: `${theme.palette.white}`,
    color: `${theme.palette.greyscale.grey40}`,
  },
};

export const COMMON_PAGES_TITLE: SideMenuItemsTexts = {
  dashboard: {
    title: '대시보드',
    comment: '대시보드 관리 입니다.',
    page: 'dashboard
  },
  company: {
    title: '입주사 관리',
    comment: '입주사 관리 입니다.',
    page: 'company',
  },
  visitor: {
    title: '방문자 관리',
    comment: '각 세대에서 초대한 방문자 정보를 확인할 수 있습니다.',
    page: 'visitor',
  },
  community: {
    title: '커뮤니티 관리',
    comment: '커뮤니티 관리 입니다.',
    page: 'community',
  },
  notice: {
    title: '공지/일정 관리',
    comment: '공지/일정 관리 입니다.',
    page: 'notice',
  },
  complaints: {
    title: '민원관리',
    comment: '민원관리 입니다.',
    page: 'complaints',
  },
  publicFacilities: {
    title: '공용 시설',
    comment: '공용 시설 관리 입니다.',
    page: 'publicFacilities',
  },
  maintenanceCost: {
    title: '관리비',
    comment: '관리비 관리 입니다.',
    page: 'maintenanceCost',
  },
  Survey: {
    title: '설문조사',
    comment: '설문조사 관리 입니다.',
    page: 'survey',
  },
  setting: {
    title: '설정',
    comment: '설정 관리 입니다',
    page: 'setting',
  },
};

export const COMMON_ICON_NAMES = {
  side: {
    dashboard: 'dashboard',
    company: 'company',
    visitor: 'visitor',
    community: 'community',
    notice: 'notice',
    complaints: 'complaints',
    publicFacilities: 'publicFacilities',
    maintenanceCost: 'maintenanceCost',
    survey: 'survey',
    setting: 'setting',
  },
};
