import { CHANGE_ACTIVE_SIDEBAR_ITEM } from "../constants/navigationConstants";

const initialState = {
  activeItem: JSON.parse(localStorage.getItem("staticSidebar"))
    ? window.location.pathname
    : null,
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_SIDEBAR_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    default:
      return state;
  }
}
