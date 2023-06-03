import { CHANGE_ACTIVE_SIDEBAR_ITEM } from "../constants/navigationConstants";

export function changeActiveSidebarItem(activeItem) {
  return {
    type: CHANGE_ACTIVE_SIDEBAR_ITEM,
    activeItem,
  };
}
