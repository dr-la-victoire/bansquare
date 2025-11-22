// JS for the testimonial arrow sliding
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
	testimonials.forEach((t) => t.classList.remove("active"));
	testimonials[i].classList.add("active");
}

document.querySelector(".arrow.left").onclick = () => {
	index = (index - 1 + testimonials.length) % testimonials.length;
	showTestimonial(index);
};

document.querySelector(".arrow.right").onclick = () => {
	index = (index + 1) % testimonials.length;
	showTestimonial(index);
};

showTestimonial(index);

// JS for the fade-in animation
document.addEventListener("scroll", () => {
	document.querySelectorAll(".fade-in").forEach((el) => {
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight - 100) {
			el.classList.add("visible");
		}
	});
});

// JS for hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});
