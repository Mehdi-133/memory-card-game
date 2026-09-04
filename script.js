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

function shuffleCard(card) {
  return card.sort(() => Math.random() - 0.5);
}

function createCards(card) {
  shuffleCard(card);
  card.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <img src = "${card.src}" alt = "${card.alt} ">`;

    gameBoard.appendChild(cardElement);
  });
}



createCards(card);
