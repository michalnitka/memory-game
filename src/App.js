import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImages = [
  { src: "/img/Chase_PNG.png", matched: false },
  { src: "/img/Everest_sitinig.png", matched: false },
  { src: "/img/Marshall.png", matched: false },
  { src: "/img/Rubble.png", matched: false },
  { src: "/img/Skye.png", matched: false },
  { src: "/img/Zuma.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevState) => {
          return prevState.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <h1>Memory game</h1>
      <button onClick={shuffleCards}>Nowa gra</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
