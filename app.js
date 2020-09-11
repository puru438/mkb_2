//!gallery

const model = document.querySelector(".model");
const previews = document.querySelectorAll(".gallery-img");
const original = document.querySelector(".full-image");
const imgText = document.querySelector(".caption");

previews.forEach((previews) => {
  previews.addEventListener("click", () => {
    model.classList.add("open");
    original.classList.add("open");
    const originalSrc = previews.getAttribute("data-original");
    original.src = originalSrc;
    const altText = previews.alt;
    imgText.textContent = altText;
  });
});

model.addEventListener("click", (e) => {
  if (e.target.classList.contains("model")) {
    model.classList.remove("open");
    original.classList.remove("open");
  }
});
