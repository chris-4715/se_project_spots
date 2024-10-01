const newPostBtn = document.querySelector(".profile__post-button");
const closeNewPostModalBtn = document.querySelector(".new-post__close-button");
const newPost = document.querySelector(".new-post");
const newPostForm = document.querySelector(".new-post__form");
const newPostModal = document.querySelector(".new-post-modal");
const postAuthorElement = document.querySelector(".post__author");
const postImageElement = document.querySelector(".post__image");
const postLikeElement = document.querySelector(".post__like");
const newPostLink = document.querySelector("[name='image-link']");
const newPostCaption = document.querySelector("[name='caption']");
const savePostBtn = document.querySelector(".new-post__save-button");
const posts = document.querySelector(".posts");

// Open New Post Modal
function openNewPostModal(newPost) {
  newPostModal.classList.add("new-post_open");
}
newPostBtn.addEventListener("click", () => {
  openNewPostModal(newPost);
});

// Make changes to the inputs in the modal
function handleNewPostFormSubmit() {
  const newPostTemplate = document.querySelector("#post").content;
  const newPostElement = newPostTemplate.querySelector(".post").cloneNode(true);
  newPostElement.querySelector(".post__image").src = newPostLink.value;
  newPostElement.querySelector(".post__author").textContent =
    newPostCaption.value;

  posts.append(newPostElement);

  closeNewPostModal();
}
newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleNewPostFormSubmit(e);
});

// Close Edit Profile Modal without saving changes
function closeNewPostModal(e) {
  newPostModal.classList.remove("new-post_open");
}
closeNewPostModalBtn.addEventListener("click", closeNewPostModal);
