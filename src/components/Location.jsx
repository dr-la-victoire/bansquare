function Location() {
  return (
    <section className="location-section">
      <div className="address-box">
        <h2>Our Location</h2>
        <p>Bansquare Printing Press, Lokoja, Kogi State, Nigeria</p>
        <p>Open Monday–Saturday, 8am–6pm</p>
      </div>

      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.860159867966!2d6.742175074367956!3d7.804625306952734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104f5e1c63305813%3A0xd90196db891bde5b!2sBansquare%20Bookstores!5e0!3m2!1sen!2sng!4v1763590785502!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
