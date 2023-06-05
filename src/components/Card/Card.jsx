import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({character, onClose}) {
  const { id, name, status, species, gender, origin, image} = character;

    const handlerOnClick = () => {
      onClose(id);
    }
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={name} />
      <div className={styles.cardBody}>
        <Link to={`/detail/${id}`}>
        <p>{name}</p>
        </Link>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{origin.name}</p>
      </div>
      <button onClick={handlerOnClick}>X</button>
    </div>
  );
}
