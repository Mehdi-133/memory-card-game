const card = [
  {
    id: 1,
    matchId: 1,
    src: "assets/images/2b314b6d11e0bc2fcade636ff83d6cf5.jpg",
    alt: "anime character 1",
  },
  {
    id: 2,
    matchId: 1,
    src: "assets/images/2b314b6d11e0bc2fcade636ff83d6cf5.jpg",
    alt: "anime character 1",
  },
  {
    id: 3,
    matchId: 2,
    src: "assets/images/3ecd493532e1d356135fa2e2c888c7d7.jpg",
    alt: "anime character 2",
  },
  {
    id: 4,
    matchId: 2,
    src: "assets/images/3ecd493532e1d356135fa2e2c888c7d7.jpg",
    alt: "anime character 2",
  },
  {
    id: 5,
    matchId: 3,
    src: "assets/images/a7da19e74ec7fcacba1715cd03bf64b0.jpg",
    alt: "anime character 3",
  },
  {
    id: 6,
    matchId: 3,
    src: "assets/images/a7da19e74ec7fcacba1715cd03bf64b0.jpg",
    alt: "anime character 3",
  },
  {
    id: 7,
    matchId: 4,
    src: "assets/images/ed8f79e44852c2fd1f3936ffb912845b.jpg",
    alt: "anime character 4",
  },
  {
    id: 8,
    matchId: 4,
    src: "assets/images/ed8f79e44852c2fd1f3936ffb912845b.jpg",
    alt: "anime character 4",
  },
  {
    id: 9,
    matchId: 5,
    src: "assets/images/62f86deaebc9ca68ebe0ae08e9632ed8.jpg",
    alt: "anime character 5",
  },
  {
    id: 10,
    matchId: 5,
    src: "assets/images/62f86deaebc9ca68ebe0ae08e9632ed8.jpg",
    alt: "anime character 5",
  },
  {
    id: 11,
    matchId: 6,
    src: "assets/images/3893377047abed7a8c43d5189c2cff18.jpg",
    alt: "anime character 6",
  },
  {
    id: 12,
    matchId: 6,
    src: "assets/images/3893377047abed7a8c43d5189c2cff18.jpg",
    alt: "anime character 6",
  },
];

const gameBoard = document.getElementById("game-board");
const counter = document.getElementById("counter");
const eachMove = document.getElementById("eachMove");
const restart = document.getElementById("restart");
const popup = document.querySelector("congratPopup");

const flippedCard = [];
let pairFound = 0;
let moves = 0;

function shuffleCard(card) {
  return card.sort(() => Math.random() - 0.5);
}

function createCards(card) {
  shuffleCard(card);
  card.forEach((card) => {
    const cardElement = document.createElement("div");
    const img = document.createElement("img");
    cardElement.classList.add("card");
    cardElement.dataset.matchId = card.matchId;
    img.src = card.src
    img.alt = card.alt

    gameBoard.appendChild(cardElement);
    cardElement.appendChild(img)
  });
}

function faceUp(card) {
  card.addEventListener("click", () => {
    if (flippedCard.includes(card)) {
      return;
    }
    if (card.classList.contains("matched")) {
      return;
    }
    if (flippedCard.length >= 2) {
      return;
    }
    card.classList.add("flip");
    flippedCard.push(card);
    // setTimeout(() => {
    //   if (flippedCard.length === 1) {
    //     card.classList.remove("flip");
    //     flippedCard.length = 0;
    //   }
    // }, 1000);

    match();
  });
}

createCards(card);

const cards = Array.from(document.querySelectorAll("#game-board .card"));

cards.forEach((card) => {
  faceUp(card);
});

function match() {
  if (flippedCard.length !== 2) {
    return;
  }

  moves++;
  eachMove.textContent = moves;

  if (flippedCard[0].dataset.matchId === flippedCard[1].dataset.matchId) {
    flippedCard[0].classList.add("matched");
    flippedCard[1].classList.add("matched");
    flippedCard.length = 0;
    pairFound++;
    counter.textContent = pairFound;
    congratsMessage();
  } else {
    setTimeout(() => {
      flippedCard[0].classList.remove("flip");
      flippedCard[1].classList.remove("flip");
      flippedCard.length = 0;
    }, 1000);
  }
}

function restartGame() {
  restart.addEventListener("click", () => {
    location.reload();
  });
}

function congratsMessage() {
  const checkAllCard = cards.every((card) =>
    card.classList.contains("matched"),
  );
  if (checkAllCard) {
    popup.classList.add("show");
  }
}

restartGame();
