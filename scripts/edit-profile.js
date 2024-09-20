const editProfileBtn = document.querySelector(".profile__button");
const closeProfileBtn = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");

function openEditProfileModal() {
  modal.classList.add("modal__open");
}

editProfileBtn.addEventListener("click", openEditProfileModal);

function closeEditProfileModal() {
  modal.classList.remove("modal__open");
}

closeProfileBtn.addEventListener("click", closeEditProfileModal);
