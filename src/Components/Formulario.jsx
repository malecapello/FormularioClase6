import { useState } from "react"
import "./Formulario.css"



const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [confirmarc, setConfirmarc] = useState("")


    const [nombreValido, setNombreValido] = useState(false)
    const [apellidoValido, setApellidoValido] = useState(false)
    const [emailValido, setEmailValido] = useState (false)
    const [telefonoValido,setTelefonoValido]=useState (false)
    
    const [mostrarValores,setMostrarValores] = useState(false);
    const [errors, setErrors] = useState(false)
      
    function actualizarNombre(e) {
        setNombre(e.target.value)
        setNombreValido(e.target.value.length > 10)
        
    
    }

    function actualizarApellido(e) {
        setApellido(e.target.value)
        setApellidoValido(e.target.value.length > 10)
    }

    function actualizarEmail(e) {
        setEmail(e.target.value)
        setEmailValido(/^\S+@\S+\.\S+$/.test(e.target.value))
    }

    function actualizarTelefono(e) {
        setTelefono(e.target.value)
        setTelefonoValido(e.target.value.length > 10)
    }

    function actualizarContrasenia(e) {
        setContrasenia(e.target.value)
    }


    function actualizarConfirmarc(e) {
        setConfirmarc(e.target.value)
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        setMostrarValores(true);
        setErrors(!nombreValido || !apellidoValida || !emailValido || !telefonoValido );
      }

    if (nombreValido && apellidoValido && emailValido && telefonoValido) {
        console.log("Datos Validos")
    } else {
        console.log("Los datos no son correctos")
    }
    
   
    
   

    return (

        <form action="">
            <div className="container">
                <h2>Registro</h2>
                <div className="grupo">
                    <input type="text" name="nombre" onChange={actualizarNombre} className="barra" placeholder="" value={nombre} />
                    { !nombreValido && 'Los datos son incorrectos' }
                    <label htmlFor="nombre">Nombre </label>
                </div>
                <div className="grupo">
                    <input type="text" name="apellido" onChange={actualizarApellido} placeholder="" className="barra" value={apellido} />
                    
                    <label htmlFor="apellido">Apellido </label>
                </div>
                <div className="grupo">
                    <input type="email" name="email" onChange={actualizarEmail} placeholder="" className="barra" value={email} />
                    
                    <label htmlFor="email">Email </label>
                </div>
                <div className="grupo">
                    <input type="number" name="telefono" onChange={actualizarTelefono} placeholder="" className="barra" value={telefono} />
                    <label htmlFor="telefono">Telefono </label>
                </div>
                <div className="grupo">
                    <input type="password" name="contrasenia" onChange={actualizarContrasenia} placeholder="" className="barra" value={contrasenia} />
                    <label htmlFor="contrasenia">Contraseña </label>
                </div>
                <div className="grupo">
                    <input type="password" name="confirmarc" placeholder="" className="barra" onChange={actualizarConfirmarc} value={confirmarc} />
                    <label htmlFor="confirmarc">Confirmar Contraseña </label>
                </div>
                <button type="submit" onClick={enviarDatos}>Enviar</button>
            </div >
        </form>




    )
}

export { Formulario }