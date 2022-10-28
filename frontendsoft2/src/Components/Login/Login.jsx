import "bootstrap/dist/css/bootstrap.css";
import FormInput from "../FormInput/FormInput.jsx";
import image from "../../Assets/Images/imagenLogin.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


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


  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(Login)
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
