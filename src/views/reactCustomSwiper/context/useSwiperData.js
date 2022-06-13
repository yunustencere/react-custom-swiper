import { createContext, useEffect, useReducer, useState } from "react";
import { swiperReducer } from "./swiperReducer";

let initialState = {
  images: [],
  currentIndex: 0
};

export const swiperContext = createContext();

export const SwiperProvider = ({ children }) => {
  const [swiperData, dispatch] = useReducer(swiperReducer, initialState);

  useEffect(() => {
    fetchSwiperData();
  }, []);
  useEffect(() => {
    console.log("CURRENT INDEX:" + swiperData.currentIndex)
  }, [swiperData.currentIndex]);


  //FETCH
  const fetchSwiperData = () => {
    const DUMMY_IMAGES_URL = `https://jsonplaceholder.typicode.com/photos`;
    fetch(DUMMY_IMAGES_URL)
      .then(response => response.json())
      .then(data => dispatch({
        type: "setSwiperData",
        newSwiperData: data
      }))
      .catch((err) => {
        console.log(err)
      });
  };

  //Slide Into Image With Image DOM Id
  const slideToImageWithDomId = (imageDomId) => {
    document.getElementById(imageDomId).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    dispatch({
      type: "updateCurrentIndex",
      newCurrentIndex: findIndexWithId(imageDomId)
    })
  }

  const slideToNextImage = () => {
    const nextElementId = getNextElementId();
    slideToImageWithDomId(`image_${nextElementId}`)
  }

  const slideToPreviousImage = () => {
    const previousElementId = getPreviousElementId();
    slideToImageWithDomId(`image_${previousElementId}`)
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
        slideToImageWithDomId
      }}
    >
      {children}
    </swiperContext.Provider>
  );
};
