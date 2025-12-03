// an array of the books and images
const categories = {
  Fiction: [
    {
      title: "When We Were Young",
      image: "./images/books/fiction/karen.jpg",
      author: "Karen Kingsbury",
    },

    {
      title: "Piercing The Darkness",
      image: "./images/books/fiction/frank.jpg",
      author: "Frank E. Peretti",
    },

    {
      title: "Americanah",
      image: "./images/books/fiction/chimamanda.jpeg",
      author: "Chimamanda Ngozi Adichie",
    },

    {
      title: "The Shining",
      image: "./images/books/fiction/stephen.jpg",
      author: "Stephen King",
    },

    {
      title: "Unseen",
      image: "./images/books/fiction/ted.jpg",
      author: "Ted Dekker",
    },
  ],

  Business: [
    {
      title: "The Psychology of Selling",
      image: "./images/books/business/brain.jpg",
      author: "Brian Tracy",
    },

    {
      title: "How to Win Friends & Influence People",
      image: "./images/books/business/dale.jpg",
      author: "Dale Carnegie",
    },

    {
      title: "The Lean Startup",
      image: "./images/books/business/eric.jpg",
      author: "Eric Ries",
    },

    {
      title: "Rich Dad Poor Dad",
      image: "./images/books/business/robert.jpg",
      author: "Robert Kiyosaki",
    },

    {
      title: "Secrets of Closing the Sale",
      image: "./images/books/business/zig.jpg",
      author: "Zig Ziglar",
    },
  ],

  Children: [
    {
      title: "Harry Potter and the Half-Blood Prince",
      image: "./images/books/children/harry.jpg",
      author: "J.K Rowling",
    },

    {
      title: "The Little Prince",
      image: "./images/books/children/prince.jpg",
      author: "Antoine de Saint Exupery",
    },

    {
      title: "Oh, The Places You'll Go",
      image: "./images/books/children/seuss.jpg",
      author: "Dr. Seuss",
    },

    {
      title: "Diary of a Wimpy Kid",
      image: "./images/books/children/wimpy.jpg",
      author: "Jeff Kinney",
    },
  ],

  Biographies: [
    {
      title: "Gifted Hands",
      image: "./images/books/biography/carson.jpg",
      author: "Ben Carson",
    },
    {
      title: "Elon Musk",
      image: "./images/books/biography/elon.jpg",
      author: "Ashlee Vance",
    },

    {
      title: "Becoming",
      image: "./images/books/biography/michelle.jpg",
      author: "Michelle Obama",
    },

    {
      title: "Steve Jobs",
      image: "./images/books/biography/steve.jpg",
      author: "Walter Isaacson",
    },
  ],

  Religion: [
    {
      title: "Knowing God",
      image: "./images/books/religion/ji.jpg",
      author: "J.I Parker",
    },

    {
      title: "Desiring God",
      image: "./images/books/religion/john.jpg",
      author: "John Piper",
    },

    {
      title: "The Life of Joy",
      image: "./images/books/religion/martin.jpg",
      author: "Martin Lloyd-Jones",
    },

    {
      title: "Systematic Theology",
      image: "./images/books/religion/wayne.jpg",
      author: "Wayne Grudem",
    },
  ],
  Nonfiction: [
    {
      title: "So Good They Can't Ignore You",
      image: "./images/books/self-help/cal.jpg",
      author: "Cal Newport",
    },
    {
      title: "Deep Work",
      image: "./images/books/self-help/deep.jpg",
      author: "Cal Newport",
    },
    {
      title: "Atomic Habits",
      image: "./images/books/self-help/james.jpg",
      author: "James Clear",
    },

    {
      title: "The Subtle Art of Not Giving a F*ck",
      image: "./images/books/self-help/mark.jpg",
      author: "Mark Manson",
    },
  ],
};

// fetching the books and updating the dom
function renderBooksFromList(categoryCard, books) {
  const booksGrid = categoryCard.querySelector(".books-grid");
  booksGrid.innerHTML = "";

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div>${book.title}</div>
    `;
    booksGrid.appendChild(bookCard);
  });
}

// Render all categories
document.querySelectorAll(".category-card").forEach((card) => {
  const categoryName = card.querySelector("h3").innerText;
  renderBooksFromList(card, categories[categoryName] || []);
});
