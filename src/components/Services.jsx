function Services() {
  return (
    <>
      <div className="about-us" id="services">
        <h2>Our Services</h2>
      </div>

      <section className="services">
        <div className="feature">
          <div className="icon-circle pink">
            <i className="fa-regular fa-newspaper"></i>
          </div>
          <h3>Printing Press Services</h3>
          <p>
            Book printing, brochure, flyer, and stationery printing.
            Custom orders and high-volume printing options. Digital and
            offset printing capabilities.
          </p>
        </div>

        <div className="feature">
          <div className="icon-circle green">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <h3>Publishing Services</h3>
          <p>
            Manuscript submission guidelines. Editing, typesetting, and
            proofreading. Cover design and interior design services.
            ISBN registration and copyright support.
          </p>
        </div>

        <div className="feature">
          <div className="icon-circle purple">
            <i className="fa-solid fa-book"></i>
          </div>
          <h3>Bookstore</h3>
          <p>
            Browse by categories (education, business, self-help,
            fiction, etc.). Featured books and new arrivals. Online
            ordering and shipping options.
          </p>
        </div>

        <div className="feature">
          <div className="icon-circle gold">
            <i className="fa-regular fa-copyright"></i>
          </div>
          <h3>Branding Services</h3>
          <p>
            Logo and brand identity design. Corporate stationery and
            marketing collateral. Packaging and promotional materials.
          </p>
        </div>
      </section>
    </>
  );
}

export default Services;
