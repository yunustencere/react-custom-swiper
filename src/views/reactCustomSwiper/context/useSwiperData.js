import { createContext, useEffect, useReducer, useState } from "react";
import { swiperReducer } from "./swiperReducer";

let initialState = {
  images: [],
  currentIndex: 0
};

export const swiperContext = createContext();

export const SwiperProvider = ({ images, children }) => {
  const [swiperData, dispatch] = useReducer(swiperReducer, initialState);

  useEffect(() => {
    console.log(images)
    setSwiperData();
  }, [images]);

  //set
  const setSwiperData = () => {
    dispatch({
      type: "setSwiperData",
      newSwiperData: images ?? []
    })
  };

  //Slide Into Image With Image DOM Id
  const slideToImageWithDomId = (imageDomId) => {
    document.getElementById(imageDomId).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })

    dispatch({
      type: "updateCurrentIndex",
      newCurrentIndex: findIndexWithId(imageDomId)
    })
  }
  const slideToImageWithIndex = (index) => {
    slideToImageWithDomId(`image_${index + 1}`)
  }

  const slideToNextImage = () => {
    const nextElementId = getNextElementId();
    slideToImageWithIndex(nextElementId - 1)
  }

  const slideToPreviousImage = () => {
    const previousElementId = getPreviousElementId();
    slideToImageWithIndex(previousElementId - 1)
  }


  const getNextElementId = () => {
    const index = swiperData.currentIndex + 1 >= swiperData.images.length ? 0 : swiperData.currentIndex + 1
    return swiperData.images[index].id;
  }
  const getPreviousElementId = () => {
    const index = swiperData.currentIndex - 1 < 0 ? swiperData.images.length - 1 : swiperData.currentIndex - 1
    return swiperData.images[index].id;
  }
  const findIndexWithId = (imageDomId) => {
    const imageId = imageDomId.split("_")[1]
    let index = swiperData.currentIndex;
    swiperData.images.find((image, i) => {
      if (image.id == imageId) {
        index = i
        return true;
      }
    })
    return index;
  }

  return (
    <swiperContext.Provider
      value={{
        swiperData,
        slideToNextImage,
        slideToPreviousImage,
        slideToImageWithDomId,
        slideToImageWithIndex
      }}
    >
      {children}
    </swiperContext.Provider>
  );
};
