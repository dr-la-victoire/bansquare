import { useState } from "react";

const data = [
  {
    text: "Bansquare brought my book to life with professionalism and creativity!",
    author: "– Segun Obajemi. PhD., Author",
  },
  {
    text: "Our branding campaign exceeded expectations thanks to Bansquare.",
    author: "– Edge Strategy Consult.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + data.length) % data.length);

  const next = () =>
    setIndex((i) => (i + 1) % data.length);

  return (
    <section className="testimonials" id="testimonials">
      <h1>What Our Readers Say</h1>

      <div className="testimonial-wrapper">
        <button className="arrow left" onClick={prev}>
          &#8249;
        </button>

        {data.map((t, i) => (
          <div
            key={i}
            className={`testimonial ${i === index ? "active" : ""}`}
          >
            <p className="text">“{t.text}”</p>
            <h3>{t.author}</h3>
          </div>
        ))}

        <button className="arrow right" onClick={next}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
