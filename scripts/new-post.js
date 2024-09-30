const newPostBtn = document.querySelector(".profile__post-button");
const closeNewPostModalBtn = document.querySelector(".new-post__close-button");
const newPost = document.querySelector(".new-post");
const newPostElement = document.querySelector("[name='new-post__form']");
const postAuthorElement = document.querySelector(".post__author");
const postLikeElement = document.querySelector(".post__like");
const newPostLink = document.querySelector("[name='image-link']");
const newPostCaption = document.querySelector("[name='caption']");

// Open New Post Modal
function openNewPostModal() {
  newPost.classList.add("new-post_open");
}
newPostBtn.addEventListener("click", openNewPostModal);

// Close Edit Profile Modal without saving changes
function closeNewPostModal(e) {
  newPost.classList.remove("new-post_open");
}
closeNewPostModalBtn.addEventListener("click", closeNewPostModal);
