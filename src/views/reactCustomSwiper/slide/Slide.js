import React, { useContext, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';
import { swiperContext } from '../context/useSwiperData';
import SingleSliderImage from './singleSliderImage/SingleSliderImage';
import './Slide.scss'

const Slide = () => {
  const { swiperData, slideToNextImage, slideToPreviousImage, slideToImageWithIndex } = useContext(swiperContext);
  const sliderRef = useRef(null);

  const onSwiped = (eventData) => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const divider = maxScrollLeft / ((swiperData.images.length - 1) * 1)
    const index = Math.floor((sliderRef.current.scrollLeft + 300) / divider)
    console.log(index, divider, maxScrollLeft, sliderRef.current.scrollLeft);
    setTimeout(() => {
      slideToImageWithIndex(index);
    }, 10);

  }

  const onSwiping = (eventData) => {
    sliderRef.current.scrollLeft -= eventData.deltaX / 20
  }

  const handlers = useSwipeable({
    onSwiped,
    onSwiping,
    preventScrollOnSwipe: true,
  });

  const refPassthrough = (el) => {
    handlers.ref(el);
    sliderRef.current = el;
  }

  return (
    <div className="row slide justify-content-center">
      <div className="col-sm-1 g-0 d-flex align-items-center justify-content-center">
        <img src="left-arrow.png" className="arrow" onClick={() => slideToPreviousImage()} />
      </div>
      <div className="col-lg-10 g-0 slide-images" {...handlers} ref={refPassthrough}>
        {swiperData.images.map(image => {
          return <SingleSliderImage key={image.id} image={image} />
        })}
      </div>
      <div className="col-sm-1 g-0 d-flex align-items-center justify-content-center" >
        <img src="right-arrow.png" className="arrow" onClick={() => slideToNextImage()} />
      </div>
    </div>
  )
}

export default Slide