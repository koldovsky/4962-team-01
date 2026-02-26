const testimonialsSection = document.querySelector('.testimonials__carousel-track')
const nextButton = document.querySelector('.testimonials__carousel-next');
const prevButton = document.querySelector('.testimonials__button--right');
let currentSlideIndex = 0;

const testimonials = [
  {
    iconClassName: "testimonials__testimonial-icon-1",
    dividerClassName: "testimonials__testimonial-divider-1",
    title: "Absolutely love the coffee",
    text: "Absolutely love the coffee! The flavors are rich and fresh, and every cup feels like a little luxury. The subscription service is super convenient—I never have to worry about running out of coffee again. Highly recommend to any coffee lover!",
    author: "Emma Johnson",
    date: "Feb 20, 2025"
  },
  {
    iconClassName: "testimonials__testimonial-icon-2",
    dividerClassName: "testimonials__testimonial-divider-2",
    title: "I was skeptical at first",
    text: "I was skeptical at first, but this coffee subscription exceeded my expectations. The variety is amazing, and I love discovering new blends every month. The freshness is unbeatable, and the packaging keeps everything perfect until brewing!",
    author: "Daniel Smith",
    date: "Mar 5, 2025"
  },
  {
    iconClassName: "testimonials__testimonial-icon-3",
    dividerClassName: "testimonials__testimonial-divider-3",
    title: "This is hands down the best coffee",
    text: "This is hands down the best coffee I’ve ever had. The aroma when I open the bag is incredible, and the taste is smooth and well-balanced. Knowing that I’ll always have high-quality coffee delivered to my door makes my mornings so much better!",
    author: "Sophia Martinez",
    date: "Mar 10, 2025"
  },
]

function renderTestimonials(testimonials) {
  const testimonialsHTML = [];
  for (const testimonial of testimonials) {
    const testimonialHTML = `
      <li class="testimonials__carousel-slide">
            <div class="testimonials__testimonial">
              <div class="${testimonial.iconClassName}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  style="enable-background: new 0 0 100 100"
                  xml:space="preserve"
                >
                  <path
                    d="M69.3,58c0-6.1-12.6-7-12.6-22c0-11,7.9-19.2,18.9-19.2C87.3,16.9,95,27.4,95,38.5c0,19.2-18,44.6-29.2,44.6  c-2.8,0-7.9-2-7.9-5.4C58,74.3,69.3,68.4,69.3,58z"
                    style=""
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.6,58C17.6,52,5,51,5,36.1c0-11,7.9-19.2,18.9-19.2c11.8,0,19.5,10.5,19.5,21.6c0,19.2-18,44.6-29.2,44.6  c-2.8,0-7.9-2-7.9-5.4C6.3,74.3,17.6,68.4,17.6,58z"
                    style=""
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div class="${testimonial.dividerClassName}">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="34">
                  <path d="M0 17 L3000 17"></path>
                </svg>
              </div>
              <p class="testimonials__testimonial-title">
                ${testimonial.title}
              </p>
              <p class="testimonials__testimonial-text">
                <em>${testimonial.text}</em>
              </p>
              <p class="testimonials__testimonial-meta">
                <span class="testimonials__testimonial-author"
                  >— ${testimonial.author}, </span
                ><span class="testimonials__testimonial-date">${testimonial.date}</span>
              </p>
            </div>
          </li>
    `;
    testimonialsHTML.push(testimonialHTML);
  }
  testimonialsSection.innerHTML = testimonialsHTML.join('');
}

renderTestimonials(testimonials);