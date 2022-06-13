import React from 'react'
import Navbar from './navbar/Navbar'
import Slide from './slide/Slide'

const ReactCustomSwiper = () => {  


  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <Navbar/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Slide/>
        </div>
      </div>
    </>
  )
}

export default ReactCustomSwiper