import Card from "../Card/Card";
import { connect } from "react-redux";
import { removeFav } from "../../redux/actions";
import styles from '../Favorites/Favorites.module.css';

const Favorites = ({ myFavorites, removeFav }) => {
  
  // Define la función onClose para manejar el evento de cierre
  const onClose = (id) => {
    removeFav(id); // Llama a la acción removeFav para eliminar el favorito por su id
  };

  return (
    <>
      {myFavorites.map((fav) => {
        return (
          <div className={styles.containerFavs}>

          <Card
            key={fav.id}
            id={fav.id}
            character={fav}
            onClose={onClose} // Pasa la función onClose al componente Card
          />
          </div>
        );
      })}
    </>
  );
};

// Mapea el estado de Redux a las props del componente
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites, // Obtiene la lista de favoritos del estado global
  };
}

// Mapea las acciones de Redux a las props del componente
export function mapDispatchToProps(dispatch) {
  return {
    removeFav: (id) => {
      return dispatch(removeFav(id)); // Despacha la acción removeFav con el id como argumento
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
