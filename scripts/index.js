import { initialCards } from "./initial-cards.js";

const template = document.querySelector("#post").content;
const posts = document.querySelector(".posts");

// Create card function
function createCard(card) {
  const postElement = template.querySelector(".post").cloneNode(true);
  postElement.querySelector(".post__author").textContent = `${card.author}`;

  const postImage = postElement.querySelector(".post__image");
  postImage.src = `${card.link}`;
  postImage.alt = `${card.author}`;

  posts.append(postElement);

  return card;
}

// Render existing cards function
function renderCards(cards) {
  for (let card of cards) {
    createCard(card);
  }

  return cards;
}
renderCards(initialCards);
