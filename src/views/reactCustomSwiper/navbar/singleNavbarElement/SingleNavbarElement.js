import React, { useContext } from 'react'
import { swiperContext } from '../../context/useSwiperData'
import './SingleNavbarElement.scss'

const SingleNavbarElement = ({ image }) => {

    const { swiperData, slideToImageWithDomId } = useContext(swiperContext);
    return (
        <div className="single-navbar-element d-inline p-0 mx-2">
            <div className={`single-navbar-element-img-border ${swiperData.currentIndex === image.id - 1 ? "selected-image" : ""}`}
                onClick={() => slideToImageWithDomId(`image_${image.id}`)}>
                <img className="single-navbar-element-img"
                    src={image.thumbnailUrl}
                    alt={image.title}
                />
                <div className={`hover-circle`}>
                </div>
                <div className='hover-background'></div>
            </div>
            <div className="justify-content-center">
                <p className="text-center fsw--400">{image.title.split(' ')[0]}</p>
            </div>
        </div>
    )
}

export default SingleNavbarElement