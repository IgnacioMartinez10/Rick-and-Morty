import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Cards from "../src/components/Cards/Cards";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = () => {
    const newCharacter = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };
    
    setCharacters([...characters, newCharacter])
  };
  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Cards characters={characters}/>
    </div>
  );
}

export default App;
