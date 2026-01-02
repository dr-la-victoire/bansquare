// src/components/ExploreCollection.jsx
import { useState } from "react";
import "../collection.css";
import "../index.css";

const categoriesConfig = {
  Motivation: { path: "/images/books/self-help", count: 80 },
  Business: { path: "/images/books/business", count: 90 },
  Biographies: { path: "/images/books/biography", count: 120 },
  Religion: { path: "/images/books/religion", count: 100 },
  Fiction: { path: "/images/books/fiction", count: 110 },
  Children: { path: "/images/books/children", count: 60 },
};

function generateImageList(path, count) {
  return Array.from({ length: count }, (_, i) => ({
    jpg: `${path}/img-${i + 1}.jpg`,
    png: `${path}/img-${i + 1}.png`,
  }));
}

export default function ExploreCollection() {
  const categoryNames = Object.keys(categoriesConfig);
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);

  const { path, count } = categoriesConfig[selectedCategory];
  const images = generateImageList(path, count);

  return (
    <>
      <section className="explore-top-bar">
        <div className="top-bar-left">Bansquare Books</div>
      </section>

      <section className="explore-section">
        <h2 className="section-title">Explore Our Collections</h2>

        <nav className="categories-navbar">
          {categoryNames.map((category) => (
            <button
              key={category}
              className={category === selectedCategory ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="books-grid">
          {images.map((img, index) => (
            <div key={index} className="book-card">
              <img
                src={img.jpg}
                alt={`Book cover ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null; // prevent infinite loop
                  e.currentTarget.src = img.png;
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
