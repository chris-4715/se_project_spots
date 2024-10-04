import { initialCards } from "./initial-cards.js";

const template = document.querySelector("#post").content.firstElementChild;
const posts = document.querySelector(".posts");

// Like button functionality
export const handleLikeButton = (e) => {
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

// Delete button functionality
export const handleDeleteButton = (e) => {
  const postDeleteElement = e.currentTarget;
  const post = postDeleteElement.closest(".post");

  if (e.type === "mouseenter") {
    postDeleteElement.classList.add("post__delete-active");
    postDeleteElement.src = "./images/Delete-Icon-hover.svg";
  } else if (e.type === "mouseleave") {
    postDeleteElement.classList.remove("post__delete-active");
    postDeleteElement.src = "./images/Delete-Icon-default.svg";
  } else if (e.type === "click") {
    post.remove();
  }
};

// Create card function
export function getCardElement(cardData) {
  const cardElement = template.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".post__image");
  const cardTitleEl = cardElement.querySelector(".post__author");

  cardImageEl.alt = cardData.author;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.author;

  // Attach event listeners for the mouse events for like button directly to the new card
  const postLikeElement = cardElement.querySelector(".post__like");
  postLikeElement.addEventListener("mouseenter", handleLikeButton);
  postLikeElement.addEventListener("mouseleave", handleLikeButton);
  postLikeElement.addEventListener("click", handleLikeButton);

  // Attach event listeners for the mouse events for delete button directly to the new card
  const postDeleteElement = cardElement.querySelector(".post__delete");
  postDeleteElement.addEventListener("mouseenter", handleDeleteButton);
  postDeleteElement.addEventListener("mouseleave", handleDeleteButton);
  postDeleteElement.addEventListener("click", handleDeleteButton);

  return cardElement;
}

// Render existing cards function
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  posts.append(cardElement);
});
