const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      };
      return res
        .writeHead(200, { "Content-type": "application/json" }) //
        .end(JSON.stringify(character)); // la info viaja en formato JSON.
    })
    .catch((error) => {
      return res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(error.message);
    });
};

module.exports = getCharById;
