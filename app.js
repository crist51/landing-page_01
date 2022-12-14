// --------------------- mouse --------------------- \\

const customCursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", handleCustomCursor);

function handleCustomCursor(e) {
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

// ---------------- title typewriter --------------- \\

const title = document.querySelector("h1");
const heroPushLink = document.querySelector(".hero-push-link");
const txt = "Astom Martin, team F1.";

function typewriter(text, index) {
  if (index > 10) heroPushLink.classList.add("active");
  // added the "class "character 10
  if (index < text.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${text[index]}</span>`;
      typewriter(text, index + 1);
    }, 200);
  }
}
setTimeout(() => {
  typewriter(txt, 0);
}, 300);

// ---------------  Push down button --------------- \\

heroPushLink.addEventListener("click", slideDown);

function slideDown(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
    behavior: "smooth",
  });
}

// ---------------  Scroll animations --------------- \\

const generalAnimatedElements = [
  ...document.querySelectorAll("h2"),
  ...document.querySelectorAll(".section-subtitle"),
];
const discoverSectionElements = [
  document.querySelector(".text-discover-content h3"),
  document.querySelector(".text-discover-content p"),
  document.querySelector(".discover-link"),
  document.querySelector(".discover-main-img"),
];
console.log(discoverSectionElements);
const slideInContent = [
  ...document.querySelectorAll(".side-apparition-container"),
];
const animatedContents = [
  ...generalAnimatedElements,
  ...discoverSectionElements,
  ...slideInContent
]

const intersectionObserver = new IntersectionObserver(handleIntersect, { rootMargin: "-20%" })
// we listen to the event at 20% off

animatedContents.forEach(el => intersectionObserver.observe(el))

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      intersectionObserver.unobserve(entry.target)
      // stop listening to the event
    }
  })
}