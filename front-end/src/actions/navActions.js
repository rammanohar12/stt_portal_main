export const setNavItem = (navItem, history) => async (dispatch) => {
  try {
    console.log("navitem", navItem);
    dispatch({
      type: "SET_NAV_ITEM",
      selectedNavItem: navItem,
    });
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
