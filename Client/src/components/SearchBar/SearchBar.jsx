import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const saveOnSearch = () => {
      onSearch(id)
   }

   const [id, setId] = useState("");

   const handleChange = (event) =>{
      const saveId = event.target.value
      setId(saveId)
   }

   const addRandomCharacter = () => {
      let idRandom = Math.ceil(Math.random()*826)
      onSearch(idRandom)
   }
   return (
      <div className={styles.container}>
         <input onChange={handleChange} type='search'placeholder='Escriba el ID del personaje que desee agregar' />
         <button onClick={saveOnSearch}>Agregar</button>
         <button onClick={addRandomCharacter}>Agregar random</button>
      </div>
   );
}
