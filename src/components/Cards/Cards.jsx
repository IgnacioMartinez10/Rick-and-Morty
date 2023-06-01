
import Card from "../Card/Card";
import styles from '../Cards/Cards.module.css';
export default function Cards({characters}) {
   return <div className={styles.containerCards}>
    {characters.map(({id, name, status, species, gender, origin, image})=>{
      return(
        <Card
          key = {id}
          id = {id}
          name = {name}
          status = {status}
          species = {species}
          gender = {gender}
          origin = {origin.name}
          image = {image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      )
    })}
   </div>;
}