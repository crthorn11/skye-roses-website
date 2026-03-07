import { useNavigate } from 'react-router-dom';

import '../styles/HomePage.css';

import NavbarComponent from '../components/NavbarComponent';
import Carousel from '../components/Carousel';
import ContactPage from '../pages/ContactPage';

import sml from '../assets/images/sml-gift-ex.jpg';
import med from '../assets/images/gift4.jpeg';
import lrg from '../assets/images/gift1.jpeg';

const circleData = [
  { size: 'sml', img: sml, label: "sml", route: "/SmallGifts" },
  { size: 'med', img: med, label: 'med', route: "/MediumGift" },
  { size: 'lrg', img: lrg, label: 'lrg', route: "/LargeGift"}
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="HPNav">
      <NavbarComponent />
      <Carousel />
      
      <div className="circle-cont">
        
        <ul className="circles">
          {circleData.map(({ size, img, label, route }) => (
            <li 
            key={size} 
            className={`circle-item ${size}`}
            onClick={() => navigate(route)}
            >
             
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