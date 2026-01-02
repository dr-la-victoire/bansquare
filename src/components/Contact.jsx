function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact Us</h1>

      <div className="contact-grid">
        <a
          className="contact-card"
          href="https://instagram.com/BansquarePress"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-circle red">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <h3>Instagram</h3>
        </a>

        <a
          className="contact-card"
          href="https://linkedin.com/in/BansquarePress"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-circle linkedin-blue">
            <i className="fab fa-linkedin"></i>
          </div>
          <h3>LinkedIn</h3>
        </a>

        <a
          className="contact-card"
          href="https://facebook.com/BansquarePrintingPress"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-circle facebook-blue">
            <i className="fab fa-facebook"></i>
          </div>
          <h3>Facebook</h3>
        </a>

        <a
          className="contact-card"
          href="https://twitter.com/BansquarePress"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon-circle black">
            <i className="fa-brands fa-x-twitter"></i>
          </div>
          <h3>Twitter</h3>
        </a>

        <a
          className="contact-card"
          href="mailto:bansquare@yahoo.co.uk"
        >
          <div className="icon-circle email">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email</h3>
        </a>

        <a
          className="contact-card"
          href="https://wa.me/2348035794656"
        >
          <div className="icon-circle whatsapp-green">
            <i className="fab fa-whatsapp"></i>
          </div>
          <h3>WhatsApp</h3>
        </a>
      </div>
    </section>
  );
}

export default Contact;
