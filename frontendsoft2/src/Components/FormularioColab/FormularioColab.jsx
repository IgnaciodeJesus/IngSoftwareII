import "bootstrap/dist/css/bootstrap.css";
import FormInput from "../FormInput/FormInput.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
const FormularioColab = () => {
  const navigate = useNavigate();
  const [Formularioin, setFormularioin] = useState({
    nombre: "",
    duracion: "",
    tipo: "",
    requisitos: "",
    contenido: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormularioin((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(Formularioin);
    try {
      await axios.post("http://localhost:8080/formulariocolaborador", Formularioin).then(respuesta => {
        console.log(respuesta)
        navigate("/")
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="row">
      <div className="col-sm-6 p-5">
        <h1>Formulario para subir curso</h1>
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
                  label="Nombre del Curso"
                  value={Formularioin.nombre}
                />
                <FormInput
                  onChange={handleChange}
                  name="duracion"
                  type="text"
                  label="Duración del curso"
                  value={Formularioin.duracion}
                />
                <div className="form-floating mb-3">
                  <select
                    name="tipo"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option defaultValue={0}>Seleccione Tipo de curso</option>
                    <option value="Sinc">Sincrono</option>
                    <option value="Asinc">Asincrono</option>
                  </select>
                </div>
                <FormInput
                  onChange={handleChange}
                  name="requisitos"
                  type="text"
                  label="Requisitos previos"
                  value={Formularioin.requisitos}
                />
                <FormInput
                  onChange={handleChange}
                  name="contenido"
                  type="text"
                  label="Contenido"
                  value={Formularioin.contenido}
                />

                <div>
                  <button
                    type="submit"
                    className="btn color-primary-bg-btn me-3"
                  >
                    Subir formulario
                  </button>
                  <Link to="" className="btn btn-outline-secondary me-3">
                    ¿necesita ayuda?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioColab;
