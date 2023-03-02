// Intersection observer example 2

const images = document.querySelectorAll(".lazyload");

const observer = new IntersectionObserver(handleIntersection);

// Підписуємо IntersectionObserver на всі images
images.forEach((image) => observer.observe(image));

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      // adding src from data
      entry.target.src = entry.target.dataset.src;
      // add class loaded
      entry.target.classList.add("loaded");
      // unsubscribe entry
      // Відписуємо IntersectionObserver після того, як він спрацював, щоб одні і ті самі зображення не завантажувались кожного разу повторно
      observer.unobserve(entry.target);
    }
  });
}
