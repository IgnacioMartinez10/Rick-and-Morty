import styles from "./Card.module.css";

export default function Card(characters) {
  const { id, name, status, species, gender, origin, image, onClose } =
    characters;
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} />
      <div className={styles.cardBody}>
        <p>{name}</p>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{origin.name}</p>
      </div>
      <button onClick={onClose}>X</button>
    </div>
  );
}
