const closeButton = document.querySelector('.contacts__die-content-button');
const die = document.querySelector('.contacts__die');
const openButton = document.querySelector('.contacts__wrap-left-open');
openButton.style.display = 'none';


closeButton.addEventListener('click', () => {
  die.style.opacity = 0;
  die.style.visibility = 'hidden';
  openButton.style.display = 'block';
});

openButton.addEventListener('click', () => {
  die.style.opacity = 1;
  die.style.visibility = 'visible';
  openButton.style.display = 'none';
});





