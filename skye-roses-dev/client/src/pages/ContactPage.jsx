import '../styles/ContactPage.css';
import '../components/Carousel.jsx';
import '../styles/NavbarComponent.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            {/* <div className='CPNav'>
                   <NavbarComponent />
            </div> */}
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
        </div>
    );
}

export default ContactPage;