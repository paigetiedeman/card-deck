$(document).ready(function () {
  const cardNames = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

  suits.forEach(function (suit) {
    cardNames.forEach(function (cardName) {
      $("#cards").append($("<li>").text(cardName + " of " + suit));
    });
  });
});
