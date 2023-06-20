const http = require('http');
const data = require("./utils/data");
const getCharById = require ("./controllers/getCharById")
const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // le damos permiso al front para que pueda hacer peticiones a nuestro back. 

    if (req.url.includes("/rickandmorty/character")) {
      const url = req.url.split("/"); // convierte la url en un array y la separa por cada "/".
      //Ejemplo: ["", "rickandmorty", "character", "42"].
      const id = Number(url.at(-1)); // se ubica en la ultima posicion del array, osea, en 42 y lo transforma a numero.  

      getCharById(res, id);
      console.log(getCharById);
    }
  }).listen(PORT);
