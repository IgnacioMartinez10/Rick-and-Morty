import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Cards from "../src/components/Cards/Cards";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
function App() {
  const [characters, setCharacters] = useState([]);

  let location = useLocation(); // se crea una variable con el useLocation. Lo que hace es mostrarte la ruta donde estas parado.

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 };

  const onClose = (id) => {
    const personajeFiltrados = characters.filter(character => character.id !== parseInt(id));

    setCharacters(personajeFiltrados)
  }

  return (
    <div className="App">
      {/*Si location.pathname(LA RUTA DONDE ESTAS) NO ES "/"", renderiza NAVBAR. OSEA RENDERIZA NAVBAR EN TODAS LAS RUTAS QUE NO SEAN / */}
      {location.pathname !== "/" && <NavBar onSearch={onSearch} /> }
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
