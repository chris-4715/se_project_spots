import { initialCards } from "./initial-cards.js";

const template = document.querySelector("#post").content.firstElementChild;
const posts = document.querySelector(".posts");

// Create card function
function getCardElement(cardData) {
  const cardElement = template.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".post__image");
  const cardTitleEl = cardElement.querySelector(".post__author");

  cardImageEl.alt = cardData.author;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.author;

  return cardElement;
}

// Render existing cards function
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);

  posts.append(cardElement);
});
