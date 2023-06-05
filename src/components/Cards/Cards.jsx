// Cards.js
import Card from "../Card/Card";
import styles from '../Cards/Cards.module.css';

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.containerCards}>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
