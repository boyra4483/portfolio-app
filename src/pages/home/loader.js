import wordleImg from "../../assets/pet-project-images/wordle.jpg";
import todoImg from "../../assets/pet-project-images/to-do.jpg";
import calculatorImg from "../../assets/pet-project-images/calculator.jpg";
import weatherImg from "../../assets/pet-project-images/weather.jpg";
import memoryCardGameImg from "../../assets/pet-project-images/memory-card-game.jpg";
import ticTacToeImg from "../../assets/pet-project-images/tic-tac-toe.png";
import ticTacToeAppImg from "../../assets/pet-project-images/tic-tac-toe-app.png";

const memoryCardGame = {
  name: "memory-card-game",
  techStack: "HTML CSS JS firebase",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolores eveniet incidunt temporibus maiores. Saepe nobis, possimus animi ad, eum, nemo nam voluptatem explicabo distinctio mollitia quas alias soluta impedit!",
  img: memoryCardGameImg,
  links: [
    "https://github.com/boyra4483/memory-card-game",
    "https://boyra4483.github.io/memory-card-game/",
  ],
  id: 0,
};
const wordle = {
  name: "wordle",
  techStack: "HTML CSS JSX REACT AXIOS, NINJAS-API",
  description:
    "Wordle is an addictive word game in which the user has to guess a hidden word in a limited number of tries. Each word consists of 5 letters, and after each attempt the game tells you which letters are in the correct positions, which letters are in the word but out of place, and which letters are missing altogether.",
  img: wordleImg,
  links: [
    "https://github.com/boyra4483/wordle",
    "https://boyra4483.github.io/wordle/",
  ],
  id: 1,
};
const toDo = {
  name: "to-do",
  techStack: "HTML CSS JSX REACT",
  description:
    "To-Do is a minimalistic application for creating and managing task lists. It allows you to easily add, delete and mark completed tasks",
  img: todoImg,
  links: [
    "https://github.com/boyra4483/to-do-app",
    "https://boyra4483.github.io/to-do-app/",
  ],
  id: 2,
};
const weatherApp = {
  name: "weather-app",
  techStack: "HTML CSS JSX REACT REACT-ROUTER, OPENWEATHERMAP-API",
  description:
    "Weather is a one-page application (SPA) where you can enter the name of a city or country in English and it will display detailed weather information for the specified location.",
  img: weatherImg,
  links: [
    "https://github.com/boyra4483/weather-app",
    "https://boyra4483.github.io/weather-app/",
  ],
  id: 3,
};
const calculator = {
  name: "calculator",
  techStack: "HTML CSS JSX REACT",
  description:
    "Calculator is a simple and convenient application for performing basic arithmetic operations: addition, subtraction, multiplication and division. It is suitable for everyday calculations and is characterized by a clean interface and fast operation.",
  img: calculatorImg,
  links: [
    "https://github.com/boyra4483/calculator-app",
    "https://boyra4483.github.io/calculator-app/",
  ],
  id: 4,
};
const ticTacToe = {
  name: "tic-tac-toe",
  techStack: "HTML CSS JS",
  description:
    "Tic Tac Toe is a classic two-player game played on a 3x3 grid. Players take turns marking a square with either an X or an O. The goal is to be the first to get three of your symbols in a row — horizontally, vertically, or diagonally. If all the squares are filled and no player has won, the game ends in a draw.",
  img: ticTacToeImg,
  links: [
    "https://github.com/boyra4483/tic-tac-toe",
    "https://boyra4483.github.io/tic-tac-toe/",
  ],
  id: 5,
};
const ticTacToeApp = {
  name: "tic-tac-toe-app",
  techStack: "HTML CSS JSX REACT",
  description:
    "Tic Tac Toe is a simple two-player game played on a 3x3 grid. This version includes a move history feature that lets you go back to any previous move and continue playing from that point. It's a fun way to explore different outcomes or fix a mistake during the game.",
  img: ticTacToeAppImg,
  links: [
    "https://github.com/boyra4483/tic-tac-toe-app",
    "https://boyra4483.github.io/tic-tac-toe-app/",
  ],
  id: 6,
};

function homeLoader() {
  return {
    all: [
      memoryCardGame,
      wordle,
      toDo,
      weatherApp,
      calculator,
      ticTacToe,
      ticTacToeApp,
    ],
    "html css": [],
    javascript: [memoryCardGame, ticTacToe],
    react: [wordle, toDo, weatherApp, calculator, ticTacToeApp],
    "react react-router": [weatherApp],
  };
}

export { homeLoader as default };
