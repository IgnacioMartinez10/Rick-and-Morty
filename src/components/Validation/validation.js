const validation = (userData) => {
    const errors = {};

    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(userData.email)){
        errors.email = 'El email ingresado no es válido '
    }
    if(!userData.email){
        errors.email = 'Escribi un email para ingresar '
    }
    if(userData.email.length > 35){
        errors.email = 'El email no puede superar los 35 caracteres '
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un numero '
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener un tamaño entre 6 y 10 caracteres'
    }

    return errors
}


export default validation;