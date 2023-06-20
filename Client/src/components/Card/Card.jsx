import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

export function Card({ character, onClose, myFavorites, addFav, removeFav }) {
  const { id, name, image } = character || {}; // Agrega {} como valor por defecto en caso de que character sea undefined

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) { // Usa id en lugar de character.id
        setIsFav(true);
      }
    });
  }, [myFavorites, id]); // Añade id como dependencia del efecto

  const handleFavorite = function () {
    if (!isFav) {
      setIsFav(true);
      addFav(character);
    } else {
      setIsFav(false);
      removeFav(id); // Usa id en lugar de character.id
    }
  };

  const handlerOnClick = () => {
    onClose(character.id);
  };

  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <img className={styles.cardImage} src={image} alt={name} />
      <div className={styles.cardBody}>
        <Link to={`/detail/${id}`}>
          <p>{name}</p>
        </Link>
      </div>
      <button onClick={handlerOnClick}>X</button>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      return dispatch(addFav(character));
    },
    removeFav: (id) => {
      return dispatch(removeFav(id));
    },
  };
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
