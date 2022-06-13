import { useEffect, useState } from 'react';
import './index.scss';
import ReactCustomSwiper from './views/reactCustomSwiper/ReactCustomSwiper';

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchSwiperData();
  }, [])

  const fetchSwiperData = () => {
    const DUMMY_IMAGES_URL = `https://jsonplaceholder.typicode.com/photos`;
    fetch(DUMMY_IMAGES_URL)
      .then(response => response.json())
      .then(data => {
        setImages(data.slice(0, 6))
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0 justify-content-center">
        <div className="col-lg-10 p-0">
          <div className="row justify-content-center">
            <div className="col-md-4 p-3">
              <h2 className="text-center">MASTER WIZR Modules</h2>
            </div>
          </div>
          <ReactCustomSwiper images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;
