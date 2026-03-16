const galleryImages = document.querySelectorAll(".art-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const imagesArray = Array.from(galleryImages);

function showImage(index) {
  if (imagesArray.length === 0) return;

  if (index < 0) {
    currentIndex = imagesArray.length - 1;
  } else if (index >= imagesArray.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  lightboxImage.src = imagesArray[currentIndex].src;
  lightboxImage.alt = imagesArray[currentIndex].alt;
}

function openLightbox(index) {
  showImage(index);
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeBox() {
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

imagesArray.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

if (nextBtn) {
  nextBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    showImage(currentIndex + 1);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    showImage(currentIndex - 1);
  });
}

if (closeLightbox) {
  closeLightbox.addEventListener("click", (event) => {
    event.stopPropagation();
    closeBox();
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeBox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("show")) return;

  if (event.key === "ArrowRight") {
    showImage(currentIndex + 1);
  }

  if (event.key === "ArrowLeft") {
    showImage(currentIndex - 1);
  }

  if (event.key === "Escape") {
    closeBox();
  }
});