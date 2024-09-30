const newPostBtn = document.querySelector(".profile__post-button");
const closeNewPostModalBtn = document.querySelector(".new-post__close-button");
const newPost = document.querySelector(".new-post");
const newPostModal = document.querySelector(".new-post-modal");
const newPostElement = document.querySelector("[name='new-post__form']");
const postAuthorElement = document.querySelector(".post__author");
const postImageElement = document.querySelector(".post__image");
const postLikeElement = document.querySelector(".post__like");
const newPostLink = document.querySelector("[name='image-link']");
const newPostCaption = document.querySelector("[name='caption']");

// Open New Post Modal
function openNewPostModal(newPost) {
  newPostModal.classList.add("new-post_open");
}
newPostBtn.addEventListener("click", () => {
  openNewPostModal(newPost);
});

// Make changes to the inputs in the modal
function handleNewPostFormSubmit(e) {
  e.preventDefault();

  postImageElement.textContent = newPostLink.value;
  postAuthorElement.textContent = newPostCaption.value;

  closeEditProfileModal();
}
formElement.addEventListener("submit", handleProfileFormSubmit);

// Close Edit Profile Modal without saving changes
function closeNewPostModal(e) {
  newPostModal.classList.remove("new-post_open");
}
closeNewPostModalBtn.addEventListener("click", closeNewPostModal);
