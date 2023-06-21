import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cards from "../src/components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation(); // se crea una variable con el useLocation. Lo que hace es mostrarte la ruta donde estas parado.
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const email = "ignaq@gmail.com";
  const password = "pepe123";

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        const existingCharacter = characters.find(
          (character) => character.id === data.id
        );

        if (!existingCharacter) { // si el personaje no existe lo agrega, sino devuelve que "YA EXISTE"
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡Este personaje ya ha sido agregado!");
        }
      })
      .catch(() => {
        window.alert("¡No hay personajes con este ID!");
      });
  };





  const onClose = (id) => {
    console.log(id);
    const personajeFiltrados = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(personajeFiltrados);
  };

  return (
    <div className="App">
      {/*Si location.pathname(LA RUTA DONDE ESTAS) NO ES "/"", renderiza NAVBAR. OSEA RENDERIZA NAVBAR EN TODAS LAS RUTAS QUE NO SEAN / */}
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
