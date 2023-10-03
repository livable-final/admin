import { IconsProps } from '@/types/common/icon';
import { COMMON_ICON_NAMES } from '@/constants/common';

import {
  Dashboard,
  Company,
  Visitor,
  Complaints,
  Notice,
  Community,
  PublicFacilities,
  MaintenanceCost,
  Survey,
  Setting,
} from '@/assets/icons';

function Icons({ icon, color }: IconsProps) {
  const { side } = COMMON_ICON_NAMES;

  switch (icon) {
    case side.dashboard:
      return <Dashboard color={color} />;
    case side.company:
      return <Company color={color} />;
    case side.visitor:
      return <Visitor color={color} />;
    case side.community:
      return <Community color={color} />;
    case side.notice:
      return <Notice color={color} />;
    case side.complaints:
      return <Complaints color={color} />;
    case side.publicFacilities:
      return <PublicFacilities color={color} />;
    case side.maintenanceCost:
      return <MaintenanceCost color={color} />;
    case side.survey:
      return <Survey color={color} />;
    case side.setting:
      return <Setting color={color} />;
    default:
      break;
  }
}

export default Icons;
