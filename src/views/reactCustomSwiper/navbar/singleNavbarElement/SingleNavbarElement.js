import React, { useContext } from 'react'
import { swiperContext } from '../../context/useSwiperData'

const SingleNavbarElement = ({ image }) => {

    const { slideToImageWithDomId } = useContext(swiperContext);
    return (
        <div className="single-navbar-element d-inline p-0 mx-2">
            <div className="single-navbar-element-img-border">
                <img className="single-navbar-element-img"
                    src={image.thumbnailUrl}
                    alt={image.title}
                    onClick={() => slideToImageWithDomId(`image_${image.id}`)}
                />
            </div>
            <div className="justify-content-center">
                <p className="text-center fsw--400">{image.title.split(' ')[0]}</p>
            </div>
        </div>
    )
}

export default SingleNavbarElement