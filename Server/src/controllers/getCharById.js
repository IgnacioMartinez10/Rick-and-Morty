const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}`);
    const data = response.data;
    if (data.name) {
      const { id, name, gender, species, origin, image, status } = data;
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };
      return res.status(200).json(character);
    } else {
      return res.status(400).json({ error: "Not found" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getCharById };
