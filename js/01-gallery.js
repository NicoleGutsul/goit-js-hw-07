import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    const img = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${img}" width="1280">
`);

    instance.show();

    galleryRef.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
});