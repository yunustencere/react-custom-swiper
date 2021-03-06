export const swiperReducer = (state, action) => {
  switch (action.type) {
    case "setSwiperData":
      return {
        ...state,
        images: [
          ...action.newSwiperData
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
