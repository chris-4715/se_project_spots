import { initialCards } from "./index.js";

const template = document.querySelector("#post").content;
const posts = document.querySelector(".posts");

function getCardElement(cards) {
  for (let card of cards) {
    let postElement = template.querySelector(".post").cloneNode(true);

    postElement.querySelector(".post__image").src = `${card.link}`;
    postElement.querySelector(".post__image").alt = `${card.author}`;
    postElement.querySelector(".post__author").textContent = `${card.author}`;

    posts.append(postElement);
  }

  return cards;
}

getCardElement(initialCards);
