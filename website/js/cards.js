// Select the .cards element
var cards = document.querySelector('.cards');

// Get the number of .card elements within the .cards element
var cardCount = cards.querySelectorAll('.card').length;

// Get the remainder of the card count divided by 4
var mod = cardCount % 4;

// Set the max-width of the .cards element based on the remainder
if (mod == 0 || mod == 3) {
  cards.style.maxWidth = '80%';
} else if (mod == 1 || mod == 2) {
  cards.style.maxWidth = '60%';
}