import { initialCards } from "./initial-cards.js";

const body = document.body;
const formElement = document.querySelector("[name='edit__form']");
const editProfileBtn = document.querySelector(".profile__button");
const editProfileModal = document.querySelector("#modal__edit-profile");
const editProfileName = document.querySelector("[name='name']");
const editProfileDescription = document.querySelector("[name='description']");
const closeEditProfileModalBtn = document.querySelector("#modal__profile");
const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subtitle");
const template = document.querySelector("#post").content.firstElementChild;
const modalImageViewer = document.querySelector("#modal__image-viewer");
const posts = document.querySelector(".posts");
const postImageSelected = document.querySelector(".post__image_selected");
const newPostBtn = document.querySelector(".profile__post-button");
const newPostForm = document.querySelector("[name='new-post__form']");
const newPostModal = document.querySelector("#modal__new-post");
const newPostLink = document.querySelector("[name='image-link']");
const newPostCaption = document.querySelector("[name='caption']");
const closeNewPostModalBtn = document.querySelector("#modal__close-new-post");
const closeImageViewerButton = document.querySelector(
  ".post__image-close-button"
);

// Like button functionality
const handleLikeButton = (e) => {
  const postLikeElement = e.currentTarget;

  // if (e.type === "mouseenter") {
  //   if (!postLikeElement.classList.contains("post__like_liked")) {
  //     postLikeElement.classList.add("post__like_liked-hover");
  //     postLikeElement.src = "./images/Like-Icon-liked-hover.svg";
  //   }
  // } else if (e.type === "mouseleave") {
  //   if (!postLikeElement.classList.contains("post__like_liked")) {
  //     postLikeElement.classList.remove("post__like_liked-hover");
  //     postLikeElement.src = "./images/Like-Icon-default.svg";
  //   }
  // } else if (e.type === "click") {
  //   postLikeElement.classList.toggle("post__like_liked");
  //   postLikeElement.classList.remove("post__like_liked-hover");
  //   postLikeElement.src = "./images/Like-Icon-liked.svg";
  // }

  postLikeElement.classList.toggle("post__like_liked");
};

// Delete button functionality
const handleDeleteButton = (e) => {
  const postDeleteElement = e.currentTarget;
  const post = postDeleteElement.closest(".post");

  if (e.type === "mouseenter") {
    postDeleteElement.classList.add("post__delete-active");
    postDeleteElement.src = "./images/Delete-Icon-hover.svg";
  } else if (e.type === "mouseleave") {
    postDeleteElement.classList.remove("post__delete-active");
    postDeleteElement.src = "./images/Delete-Icon-default.svg";
  } else if (e.type === "click") {
    post.remove();
  }
};

// Make changes to the inputs in the modal
function handleNewPostFormSubmit() {
  // Create a new card data object
  const cardData = {
    author: newPostCaption.value,
    link: newPostLink.value,
  };

  // Use the getCardElement function to create a new post
  const newPostElement = getCardElement(cardData);

  // Add the new post to the top of the posts list
  posts.prepend(newPostElement);

  // Close the modal after submission
  closeModal(newPostModal);

  // Clear the Post form
  newPostForm.reset();
}
newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleNewPostFormSubmit();
});
newPostForm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleNewPostFormSubmit(e);
  }
});

// Make changes to the inputs in the modal
function handleProfileFormSubmit(e) {
  e.preventDefault();

  profileNameElement.textContent = editProfileName.value;
  profileJobElement.textContent = editProfileDescription.value;

  closeModal(editProfileModal);
}
formElement.addEventListener("submit", handleProfileFormSubmit);

// Create card function
function getCardElement(cardData) {
  const cardElement = template.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".post__image");
  const cardTitleEl = cardElement.querySelector(".post__author");

  cardImageEl.alt = cardData.author;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.author;

  // Attach event listeners for the mouse events for like button directly to the new card
  const postLikeElement = cardElement.querySelector(".post__like");
  postLikeElement.addEventListener("click", handleLikeButton);

  // Attach event listeners for the mouse events for delete button directly to the new card
  const postDeleteElement = cardElement.querySelector(".post__delete");
  postDeleteElement.addEventListener("click", handleDeleteButton);
  cardImageEl.addEventListener("click", openImageViewer);

  return cardElement;
}

// Open New Post Modal
function openModal(modal) {
  modal.classList.add("modal_open");
  body.classList.add(".page__modal-open");
}

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

editProfileBtn.addEventListener("click", () => {
  openModal(editProfileModal);
});

// Close New Post Modal
function closeModal(modal) {
  modal.classList.remove("modal_open");
  body.classList.remove(".page__modal-open");
}
closeNewPostModalBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

closeEditProfileModalBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

editProfileBtn.addEventListener("click", () => {
  editProfileName.value = profileNameElement.textContent;
  editProfileDescription.value = profileJobElement.textContent;
  openModal(editProfileModal);
});

// Open Image Viewer Function
function openImageViewer(e) {
  const clickedImageSrc = e.currentTarget.src;
  const clickedImageAlt = e.currentTarget.alt;

  postImageSelected.onload = function () {
    modalImageViewer.classList.add("modal_open");
    body.classList.add("page__modal-open");
  };

  postImageSelected.src = clickedImageSrc;
  postImageSelected.alt = clickedImageAlt;
}

// Close Image Viewer Function
function closeImageViewer() {
  modalImageViewer.classList.remove("modal_open");
  body.classList.remove("page__modal-open");
}
// Close Image Viewer
closeImageViewerButton.addEventListener("click", closeImageViewer);

// Render existing cards function
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  posts.append(cardElement);
});
