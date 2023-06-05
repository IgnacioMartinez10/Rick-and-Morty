import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styles from "./Detail.module.css"

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  if (Object.keys (character).length !==0) {
    return (
      <div className={styles.card}>
        <img className={styles.cardImage} src={character.image} alt={character.name} />
        <div className={styles.cardBody}>
          <p>{character.name}</p>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin.name}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
