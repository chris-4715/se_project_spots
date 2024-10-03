import { initialCards } from "./initial-cards.js";

const template = document.querySelector("#post").content.firstElementChild;
const posts = document.querySelector(".posts");

// Like button functionality
const handleLikeButton = (e) => {
  const postLikeElement = e.currentTarget;

  if (e.type === "mouseenter") {
    if (!postLikeElement.classList.contains("post__like_liked")) {
      postLikeElement.classList.add("post__like_liked-hover");
      postLikeElement.src = "./images/Like-Icon-liked-hover.svg";
    }
  } else if (e.type === "mouseleave") {
    if (!postLikeElement.classList.contains("post__like_liked")) {
      postLikeElement.classList.remove("post__like_liked-hover");
      postLikeElement.src = "./images/Like-Icon-default.svg";
    }
  } else if (e.type === "click") {
    postLikeElement.classList.toggle("post__like_liked");
    postLikeElement.classList.remove("post__like_liked-hover");
    postLikeElement.src = "./images/Like-Icon-liked.svg";
  }
};

// Create card function
function getCardElement(cardData) {
  const cardElement = template.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".post__image");
  const cardTitleEl = cardElement.querySelector(".post__author");

  cardImageEl.alt = cardData.author;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.author;

  // Attach event listeners for the mouse events for like button
  const postLikeElements = document.querySelectorAll(".post__like");
  postLikeElements.forEach((postLikeElement) => {
    postLikeElement.addEventListener("mouseenter", handleLikeButton);
    postLikeElement.addEventListener("mouseleave", handleLikeButton);
    postLikeElement.addEventListener("click", handleLikeButton);
  });

  return cardElement;
}

// Render existing cards function
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);

  posts.append(cardElement);
});
