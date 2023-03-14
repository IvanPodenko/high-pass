const buttonSearch = document.querySelector(".header__button");
const buttonSearchClose = document.querySelector(".header__form-button");
const formSearch = document.querySelector(".header__form");


buttonSearch.addEventListener('click', () => {
  formSearch.classList.toggle('search--active');
  buttonSearch.style.display = "none";
});

buttonSearchClose.addEventListener('click', () => {
  formSearch.classList.toggle('search--active');
  buttonSearch.style.display = "block";
});



