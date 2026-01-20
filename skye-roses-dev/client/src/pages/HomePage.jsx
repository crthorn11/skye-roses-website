import '../styles/HomePage.css';
import logo from '../assets/images/skyelogo.png';
import logo3 from '../assets/images/logo3.jpeg';

import NavbarComponent from '../components/NavbarComponent';
import Carousel from '../components/Carousel';

function HomePage() {
  return (
      <div className='HPNav'>
        <NavbarComponent />
        <Carousel />
      </div>
  );
}

export default HomePage;

