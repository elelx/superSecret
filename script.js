
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  const clickableImages = Array.from(
    document.querySelectorAll(
      ".art-card img, .visdev-piece .main-image, .visdev-piece .sub-images img, .visdev-piece .sub-images2 img"
    )
  );

  let currentIndex = 0;

  clickableImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      lightboxImage.src = img.src;
      lightbox.classList.add("show");
    });
  });

  function showImage(index) {
    if (index < 0) index = clickableImages.length - 1;
    if (index >= clickableImages.length) index = 0;

    currentIndex = index;
    lightboxImage.src = clickableImages[currentIndex].src;
  }

  prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("show")) return;

    if (e.key === "Escape") lightbox.classList.remove("show");
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
