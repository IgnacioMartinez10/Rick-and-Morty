import React from "react";
import { useState } from "react";

function Form() {

  const submitHandler = (e) => {
    e.preventDefault(); // Evita que se refresque la pagina al clickear
    alert("Bienvenido perri");
  };

  const handleChange = (event) => {
    // funcion para leer los cambios en los inputs en tiempo real, se va refrescando el estado
    setInputs({
      [event.target.name]: event.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  

  return (
    <div>
      {/* // El evento ONSUBMIT Genera un refresh de la pagina. por eso se usa preventDefault en la funcion submitHandler */}
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="Ingrese su email" name="email" value={inputs.email} onChange={handleChange} />

        <input type="password" placeholder="Ingrese su contraseña" name="password" value={inputs.password} onChange={handleChange}/>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Form;
