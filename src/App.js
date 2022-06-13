import './index.scss';
import { SwiperProvider } from './views/reactCustomSwiper/context/useSwiperData';
import ReactCustomSwiper from './views/reactCustomSwiper/ReactCustomSwiper';

function App() {
  return (
    <SwiperProvider>
      <div className="container-fluid p-0 m-0">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-10 p-0">
            <div className="row justify-content-center">
              <div className="col-md-4 p-3">
                <h2 className="text-center">MASTER WIZR Modules</h2>
              </div>
            </div>
            <ReactCustomSwiper />
          </div>
        </div>
      </div>
    </SwiperProvider>
  );
}

export default App;
