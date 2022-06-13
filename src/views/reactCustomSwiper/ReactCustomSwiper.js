import React from 'react'
import { SwiperProvider } from './context/useSwiperData'
import Navbar from './navbar/Navbar'
import Slide from './slide/Slide'

const ReactCustomSwiper = ({images}) => {


  return (
    <>
      <SwiperProvider images={images}>
        <div className="row">
          <div className="col-sm-12">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Slide />
          </div>
        </div>
      </SwiperProvider>
    </>
  )
}

export default ReactCustomSwiper