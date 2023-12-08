const initialState = {
  selectedNavItem: "dashboard",
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAV_ITEM":
      return {
        ...state,
        selectedNavItem: action.selectedNavItem,
      };
    default:
      return state;
  }
};

export default navReducer;
