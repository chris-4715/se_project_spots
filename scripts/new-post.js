import { getCardElement } from "./index.js";

const body = document.querySelector("body");
const newPostBtn = document.querySelector(".profile__post-button");
const closeNewPostModalBtn = document.querySelector(".new-post__close-button");
const newPost = document.querySelector(".new-post");
const newPostForm = document.querySelector(".new-post__form");
const newPostModal = document.querySelector(".new-post-modal");
const postAuthorElement = document.querySelector(".post__author");
const postLikeElement = document.querySelector(".post__like");
const newPostLink = document.querySelector("[name='image-link']");
const newPostCaption = document.querySelector("[name='caption']");
const savePostBtn = document.querySelector(".new-post__save-button");
const posts = document.querySelector(".posts");

// Open New Post Modal
function openNewPostModal(newPost) {
  body.style.overflow = "hidden";
  newPostModal.classList.add("new-post_open");
}
newPostBtn.addEventListener("click", () => {
  openNewPostModal(newPost);
});

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
  closeNewPostModal();

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

// Close Edit Profile Modal without saving changes
function closeNewPostModal(e) {
  body.style = "";
  newPostModal.classList.remove("new-post_open");
}
closeNewPostModalBtn.addEventListener("click", closeNewPostModal);
