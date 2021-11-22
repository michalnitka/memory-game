import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImages = [
  { src: "/img/Chase_PNG.png" },
  { src: "/img/Everest_sitinig.png" },
  { src: "/img/Marshall.png" },
  { src: "/img/Rubble.png" },
  { src: "/img/Skye.png" },
  { src: "/img/Zuma.png" },
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
  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory game</h1>
      <button onClick={shuffleCards}>Nowa gra</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
