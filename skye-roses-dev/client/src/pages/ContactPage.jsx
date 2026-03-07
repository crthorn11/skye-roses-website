import '../styles/ContactPage.css';
import skyecar from '../assets/images/skyecar.png';

const ContactPage = () => {
  const policyLines = [
    "Orders must be placed 3 days in advance",
    "Gift delivery and quality ensured by SkyeGifts",
    "Orders must be placed 3 days in advance"
  ];

  return (
    <div className="contact-page">

      {/* Header */}
      <p className="fts">FEATURED SIZES</p>

      {/* Contact Links */}
      <section className="contact-card">
        <a
          href="mailto:skyegifts@gmail.com"
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
      </section>

      {/* Policy / Info Lines */}
      <section className="text-box">
        {policyLines.map((line, i) => (
          <div className="row" key={i}>
            <img className="skyecarimg" src={skyecar} alt="SkyeGifts car icon" />
            <div className="text-wrapper">
              <p className="text">{line}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default ContactPage;