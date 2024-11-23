const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  // Apply red border for the input
  inputElement.classList.add("modal__input-error");

  // Insert the Error message text and apply the class to display it
  errorElement.textContent = errorMessage;
  errorElement.classList.add("modal__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  // Remove the Error classes and text
  inputElement.classList.remove("modal__input-error");
  errorElement.classList.remove("modal__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Display Error if the fields are not valid
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Do not display Error if fields are valid
    hideInputError(formElement, inputElement);
  }
};

export const resetErrors = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const errorElements = Array.from(
    formElement.querySelectorAll(".modal__input-error_active")
  );

  // Remove Error border on the input
  inputList.forEach((inputElement) => {
    inputElement.classList.remove("modal__input-error");
  });

  // Remove Error message text
  errorElements.forEach((errorElement) => {
    errorElement.classList.remove("modal__input-error_active");
    errorElement.textContent = "";
  });

  // Disable the Save button after inputs get cleared
  const buttonElement = formElement.querySelector(".modal__save-button");
  buttonElement.setAttribute("disabled", "");
};

export const resetFormValues = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));

  // Reset all the input fields within the form
  inputList.forEach((inputElement) => {
    inputElement.value = "";
  });
};

// Get all the inputs and check if they are valid
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    // Apply the disabled attribute to the input
    buttonElement.setAttribute("disabled", "");
  } else {
    // Remove the disabled attribute to the input
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__save-button");

  toggleButtonState(inputList, buttonElement);

  // Will be enabled or disabled if the inputs meet validity requirements
  // while the user enters text
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));

  // Add submit Event Listener for all the Save buttons
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (e) {
      // Prevent page from refreshing
      e.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".modal__set")
    );

    // Apply Event Listeners for all the form while it's open
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();
