import '../styles/ContactPage.css';
import '../components/Carousel.jsx';
import '../styles/NavbarComponent.css';

import skyecar from '../assets/images/skyecar.png';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <p className='fts'>FEATURED SIZES</p>
            <div className="contact-card">
                <a
                    href="mailto:your-email@example.com"
                    className="contact-item"
                >
                    <span className="contact-label">Email</span>
                    <span className="contact-value">skyegifts@gmail.com</span>
                </a>

                <a
                    href="https://instagram.com/skyegifts?igsh=MXdkcGxsdGdyemhjaA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <span className="contact-label">Instagram</span>
                    <span className="contact-value">@SkyeGifts</span>
                </a>

                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                >
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">Chat on WhatsApp</span>
                </a>
            </div>
            <div className='text-box'>
                {[
                    "Orders must be placed 3 days in advanced",
                    "Gift delivery and quality ensured by SkyeGifts",
                    "Orders must be placed 3 days in advanced"
                ].map((line, i) => (
                    <div className='row' key={i}>
                        <img className='skyecarimg' src={skyecar} alt='' />
                        <div className='text-wrapper'>
                            <p className='text'>{line}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactPage;