import { useEffect, useRef, useState } from "react";

function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      id="about"
      className={`about-us fade-in ${visible ? "visible" : ""}`}
    >
      <h2>About Us</h2>
    </div>
  );
}

export default About;
