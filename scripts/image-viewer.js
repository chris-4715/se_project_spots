const body = document.querySelector("body");

// Close Image Viewer Function
function closeImageViewer() {
  const postImageElementViewed = document.querySelector(".post__image_viewed");

  if (postImageElementViewed) {
    postImageElementViewed.classList.remove("post__image-section_viewer-open");
    body.removeAttribute("style");
  }
}

// Open Image Viewer Function
function openImageViewer(e) {
  const postImageElementViewed = document.querySelector(".post__image_viewed");
  const postImageSelected = document.querySelector(".post__image_selected");
  const clickedImageSrc = e.currentTarget.src;

  // Add class to the correct viewer element (not the clicked image)
  if (postImageElementViewed && postImageSelected) {
    postImageSelected.src = clickedImageSrc;
    postImageElementViewed.classList.add("post__image-section_viewer-open");
    body.style.overflow = "hidden";
  }

  // Close Image Viewer
  const closeButton = document.querySelector(".post__image-close-button");
  closeButton.addEventListener("click", closeImageViewer);
}
