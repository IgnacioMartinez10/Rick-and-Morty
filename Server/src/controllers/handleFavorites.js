let myFavorites = [];

const postFavorites = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
}

const deleteFavorites = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter((character) => character.id !== Number(id));
    return res.status(200).json(myFavorites);
  };

  
module.exports = {
    postFavorites,
    deleteFavorites
}
