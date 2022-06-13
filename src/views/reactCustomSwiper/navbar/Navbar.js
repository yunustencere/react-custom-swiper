import React, { useContext } from 'react'
import { swiperContext } from '../context/useSwiperData';
import './Navbar.scss'
import SingleNavbarElement from './singleNavbarElement/SingleNavbarElement'

const Navbar = () => {

  const { swiperData } = useContext(swiperContext);

  return (
    <div className="row navbar">
      <div className="col-lg-12">
        <div className="row navbar-elements justify-content-center">
          {swiperData.images.map(image => {
            return <SingleNavbarElement key={image.id} image={image} />
          })}
        </div>
      </div>

    </div>
  )
}

export default Navbar