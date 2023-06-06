import React from "react";
import { useState } from "react";
import validation from "../Validation/validation";
import styles from "../Form/Form.module.css";

function Form({login}) {

  const submitHandler = (event) => {
    event.preventDefault(); // Evita que se refresque la pagina al clickear
    login(userData);
  };
  
    const [userData, SetUserData] = useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState({

    })

  const handleChange = (event) => {
    // funcion para leer los cambios en los inputs en tiempo real, se va refrescando el estado
    SetUserData({
      ...userData,
      [event.target.name]: event.target.value // preguntar por que se usan []
    });
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value // no entendi esto. 
    }))
  };


  return (
    <div>
      {/* // El evento ONSUBMIT Genera un refresh de la pagina. por eso se usa preventDefault en la funcion submitHandler */}
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="Ingrese su email" name="email" value={userData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        <input type="password" placeholder="Ingrese su contraseña" name="password" value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Form;
