import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/public/img/Chase_PNG.png" },
  { src: "/public/img/Everest_sitinig.png" },
  { src: "/public/img/Marshall.png" },
  { src: "/public/img/Rubble.png" },
  { src: "/public/img/Skye.png" },
  { src: "/public/img/Zuma.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Memory game</h1>
      <button onClick={shuffleCards}>Nowa gra</button>
    </div>
  );
}

export default App;
