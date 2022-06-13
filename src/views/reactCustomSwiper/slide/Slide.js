import React, { useContext } from 'react'
import { swiperContext } from '../context/useSwiperData';
import SingleSliderImage from './singleSliderImage/SingleSliderImage';
import './Slide.scss'

const Slide = () => {
  const { swiperData, slideToNextImage, slideToPreviousImage } = useContext(swiperContext);

  return (
    <div className="row slide justify-content-center">
      <div className="col-lg-1 g-0 d-flex align-items-center justify-content-center">
        <img src="left-arrow.png" className="arrow" onClick={()=>slideToPreviousImage()} />
      </div>
      <div className="col-lg-10 g-0 slide-images">
        {swiperData.images.map(image => {
          return <SingleSliderImage key={image.id} image={image} />
        })}
      </div>
      <div className="col-lg-1 g-0 d-flex align-items-center justify-content-center" >
        <img src="right-arrow.png" className="arrow" onClick={()=>slideToNextImage()} />
      </div>
    </div>
  )
}

export default Slide