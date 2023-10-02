const cardDivs = document.querySelectorAll('.card');

  cardDivs.forEach(cardDiv => {
  const liElements = cardDiv.querySelectorAll('li');
  const liCount = liElements.length;
  const ulElements = cardDiv.querySelectorAll('ul');

  if (liCount > 3) {
    ulElements.forEach(ulElement => {
      ulElement.style.cssText = "height: 90px; overflow-y: scroll; padding-right: 10px;";
    });
  }
});

// script.js

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
