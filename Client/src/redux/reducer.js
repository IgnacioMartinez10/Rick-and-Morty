import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

      case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };

        case FILTER:
            
        if(action.payload !== 'AllCharacters'){
          return{
              ...state,//no modifico all characters
              myFavorites: state.allCharacters.filter((personaje)=> personaje.gender === action.payload)
              //copia el arreglo de todos los favoritos no lo muto y devuelvo el arreglo de filtradosS
          }
           }else{
          return{
              ...state,
              myFavorites: state.allCharacters,
          }
        }

        case ORDER:
          if(action.payload === 'A'){
              return{
                  ...state,
                  myFavorites: [...state.allCharacters.sort((a, b) => a.id - b.id)]
              }
          }

          if(action.payload === 'D'){
              return{
                  ...state,
                  myFavorites: [...state.allCharacters.sort((a, b) => b.id - a.id)]
              }
          }

          return{
              ...state,
          }

    default:
      return state;
  }
};

export default reducer;
