import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

export function Card({ character, onClose, myFavorites, addFav, removeFav, id }) {
   // Agrega {} como valor por defecto en caso de que character sea undefined

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      console.log('add fav')
      if (fav.id === id) { // Usa id en lugar de character.id
        setIsFav(true);
      }
    });
  }, [myFavorites, id]); // Añade id como dependencia del efecto

  const handleFavorite = function () {
    console.log('agregando a favs')
    if (!isFav) {
      setIsFav(true);
      addFav(character);
    } else {
      setIsFav(false);
      removeFav(character.id); // Usa id en lugar de character.id
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
      <img className={styles.cardImage} src={character.image} alt={character.name} />
      <div className={styles.cardBody}>
        <Link to={`/detail/${character.id}`}>
          <p>{character.name}</p>
        </Link>
      </div>
      <button onClick={handlerOnClick}>X</button>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      console.log('add fav despachada')
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
