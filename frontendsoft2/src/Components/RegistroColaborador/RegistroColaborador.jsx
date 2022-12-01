import "bootstrap/dist/css/bootstrap.css";
import FormInput from "../FormInput/FormInput.jsx";
import image from "../../Assets/Images/imagenRegist.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";


const RegistroColaborador = () => {
  const navigate = useNavigate();
  const [regist, setregist] = useState({
    nombre: "",
    apellido:"",
    ocupacion:"",
    correo:"",
    password:"",
    

  });

  function handleChange(event) {
    const { name, value } = event.target;
    setregist((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }



//  function handleSubmit(event) {
//    event.preventDefault()
    // submitToApi(formData)
//    console.log(regist)
//}

async function handleSubmit(event) {
      event.preventDefault();
      console.log(regist);
      try{
        await axios.post("http://localhost:8080/registrocolaboradorback", regist).then(respuesta =>{
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
        <h1>Ingrese sus datos como colaborador</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 p-5">
            <div className="form-floating mb-3">
              <form onSubmit={handleSubmit} action="">
                <FormInput
                  onChange={handleChange}
                  name="nombre"
                  type="text"
                  label="Nombre"
                  value={regist.nombre}
                />
                <FormInput
                  onChange={handleChange}
                  name="apellido"
                  type="text"
                  label="Apellido"
                  value={regist.apellido}
                />
                <FormInput
                  onChange={handleChange}
                  name="ocupacion"
                  type="text"
                  label="Ocupación"
                  value={regist.ocupacion}
                />
                <FormInput
                  onChange={handleChange}
                  name="correo"
                  type="text"
                  label="Correo"
                  value={regist.correo}
                />
                <FormInput
                  onChange={handleChange}
                  name="password"
                  type="password"
                  label="Contraseña"
                  value={regist.password}
                />
                <FormInput type="password" label="Repetir Contraseña" />

                <div className="form-floating mb-3"></div>

                <div>
                  <button type="submit" className="btn color-primary-bg-btn me-3">
                    Registrarse
                  </button>
                  <a href="" className="btn btn-outline-secondary">
                    ¿Necesita ayuda?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 p-5">
            <img src={image} alt="" width="600" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroColaborador;
