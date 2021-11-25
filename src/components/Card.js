import "./Card.css";

export default function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="cover"
          src="/img/logo.png"
          alt="card cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}