import React from 'react'
import './SingleSliderImage.scss'

const SingleSliderImage = ({image}) => {
  return (
    <div className="single-slider-image-container">
        <img className="single-slider-image" id={`image_${image.id}`} src={image.url} alt={image.title} />        
    </div>
  )
}

export default SingleSliderImage