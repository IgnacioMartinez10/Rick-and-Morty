import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  // se usa destructuring del action pasandole las propiedades ya listas
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default reducer;
