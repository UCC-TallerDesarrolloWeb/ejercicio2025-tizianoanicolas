import { useState } from "react";
import{ useNavigate } from "react-router-dom";

import '@styles/login.scss'

const Login = () => {
    const [usuario, setusuario] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (usuario === "admin" && password === "admin") {
 alert("Login exitoso");
 localStorage.setItem("isLoggedIn", "true");
    navigate("/actividades");
    
    }
    else
    {
alert("Usuario o contraseña incorrectos");
    }
}
return (
<div className="Login-container">
<form className="Login-form" onSubmit={handleLogin}>
    <h2>Iniciar secion</h2>
    <input type="text" placeholder="Ingrese su usuario" onChange={(e) => setusuario(e.target.value)} value={usuario} required />
    <input type="password" placeholder="Ingrese su contraseña" onChange={(e) => setpassword(e.target.value)} value={password} required />
    <button type="submit">Ingresar</button>
</form>
</div>
)
}
export default Login;