export const swiperReducer = (state, action) => {
  switch (action.type) {
    case "setSwiperData":
      return {
        ...state,
        images: [
          ...action.newSwiperData.slice(0, 6)
        ]
      }
    case "updateCurrentIndex":
      return {
        ...state,
        currentIndex: action.newCurrentIndex ?? state.currentIndex
      }

    default:
      return;
  }
};
