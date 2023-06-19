import Card from "../Card/Card";
import { connect } from "react-redux";
const Favorites = ({ myFavorites }) => {

  return (
    <>
      {myFavorites.map((fav) => {
        return (
          <Card
            key={fav.id}
            name={fav.name}
            gender={fav.gender}
            species={fav.species}
            image={fav.image}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
