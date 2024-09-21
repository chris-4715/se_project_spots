const editProfileBtn = document.querySelector(".profile__button");
const closeProfileBtn = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const formElement = document.querySelector(".edit");
const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subtitle");
const editProfileName = document.querySelector(".edit__profile-name");
const editProfileDescription = document.querySelector(
  ".edit__profile-description"
);

// Open Edit Profile Modal
function openEditProfileModal() {
  modal.classList.add("modal__open");

  editProfileName.value = profileNameElement.textContent;
  editProfileDescription.value = profileJobElement.textContent;
}
editProfileBtn.addEventListener("click", openEditProfileModal);

// Make changes to the inputs in the modal
function handleProfileFormSubmit(e) {
  e.preventDefault();

  profileNameElement.textContent = editProfileName.value;
  profileJobElement.textContent = editProfileDescription.value;

  closeEditProfileModal();
}
formElement.addEventListener("submit", handleProfileFormSubmit);

// Close Edit Profile Modal without saving changes
function closeEditProfileModal(e) {
  modal.classList.remove("modal__open");
}
closeProfileBtn.addEventListener("click", closeEditProfileModal);
