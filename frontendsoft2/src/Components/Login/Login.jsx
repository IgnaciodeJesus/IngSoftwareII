import "bootstrap/dist/css/bootstrap.css";
import FormInput from "../FormInput/FormInput.jsx";
import image from "../../Assets/Images/imagenLogin.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState({
    correo:"",
    password:"",

  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


  async function handleSubmit(event) {
    event.preventDefault();
    console.log(Login);
    try{
      await axios.post("http://localhost:8080/formulariocolaborador", Login).then(respuesta =>{
        console.log(respuesta)
        navigate("/")
      } )
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="row">
      <div className="col-sm-6 p-5">
        <h1>Iniciar Sesion</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 p-5">
            <div className="form-floating mb-3">
              <form onSubmit={handleSubmit} action="">
                <FormInput
                  onChange={handleChange}
                  name="correo"
                  type="text"
                  label="Correo"
                  value={Login.correo}
                />
                <FormInput
                  onChange={handleChange}
                  name="password"
                  type="password"
                  label="Contraseña"
                  value={Login.password}
                />
                <div className="form-floating mb-3">
                  <select
                    name="tipo"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option defaultValue={0}>Seleccione Rol</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="colaborador">Colaborador</option>
                  </select>
                </div>
                <div>
                <button
                    type="submit"
                    className="btn color-primary-bg-btn me-3"
                  >
                    Iniciar Sesión
                  </button>
                  <Link to="/UIColaborador" className="btn btn-outline-secondary me-3">
                    ¿Olvidó su Contraseña?
                  </Link>
                  <Link to="/RegistroEstudiante" className="btn color-primary-bg-btn">
                    ¿No tiene Usuario?
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 p-5">
            <img src={image} alt="" width="400" height="250" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
