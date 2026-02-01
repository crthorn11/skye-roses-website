import '../styles/HomePage.css';

import NavbarComponent from '../components/NavbarComponent';
import Carousel from '../components/Carousel';
import ContactPage from '../pages/ContactPage';

import sml from '../assets/images/sml-gift-ex.jpg';
import med from '../assets/images/gift4.jpeg';
import lrg from '../assets/images/gift1.jpeg';

const circleData = [
  { size: 'sml', img: sml, label: "sml" },
  { size: 'med', img: med, label: 'med' },
  { size: 'lrg', img: lrg, label: 'lrg' }
];

function HomePage() {
  return (
    <div className="HPNav">
      <NavbarComponent />
      <Carousel />
      <div className="circle-cont">
        <ul className="circles">
          {circleData.map(({ size, img, label }) => (
            <li key={size} className={`circle-item ${size}`}>
              <div className="circle-img-wrap">
                <img src={img} />
                <p className="circle-label">{label}</p>
              </div>
          </li>
          ))}
        </ul>
      </div>
      <div className="CP">
          <ContactPage />
      </div>
    </div>
  );
}



export default HomePage;