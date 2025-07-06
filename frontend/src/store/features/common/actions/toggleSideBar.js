export const toggleSideBarActions = (state, {payload}) => {
    state.isSideBarOpen = payload ?? !state.isSideBarOpen;
}