import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { removeFav } from "../../redux/actions";
import styles from '../Favorites/Favorites.module.css';
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = ({ myFavorites, removeFav }) => {


  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
}

const handleFilter = (event) => {
  dispatch(filterCards(event.target.value));
}


  
  // Define la función onClose para manejar el evento de cierre
  const onClose = (id) => {
    removeFav(id); // Llama a la acción removeFav para eliminar el favorito por su id
  };

  return (
    <>
            <div>
              <select name="" id="" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>

              <select name="" id="" onChange={handleFilter}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">Unknown</option>

              </select>
            </div>
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
