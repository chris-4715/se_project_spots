const body = document.querySelector("body");
const editProfileBtn = document.querySelector(".profile__button");
const closeProfileBtn = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const formElement = document.querySelector("[name='edit__form']");
const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subtitle");
const editProfileName = document.querySelector("[name='name']");
const editProfileDescription = document.querySelector("[name='description']");

// Open Edit Profile Modal
function openModal(modal) {
  body.style.overflow = "hidden";
  modal.classList.add("modal_open");
}

editProfileBtn.addEventListener("click", () => {
  editProfileName.value = profileNameElement.textContent;
  editProfileDescription.value = profileJobElement.textContent;
  openModal(modal);
});

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
  body.style = "";
  modal.classList.remove("modal_open");
}
closeProfileBtn.addEventListener("click", closeEditProfileModal);
