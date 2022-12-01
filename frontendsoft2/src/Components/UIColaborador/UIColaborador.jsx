import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import image from "../../Assets/Images/Java.png";
import image2 from "../../Assets/Images/Python.png";
import image3 from "../../Assets/Images/VBA.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const UIColaborador = () => {
  const [cursos, setcursos] = useState([]);
  React.useEffect(() => {
    async function getCursos(){
        const res = await fetch("https://task-node-api-rest.herokuapp.com/tasks")
        const data = await res.json()
        console.log(data)
        setcursos(data)

    }
    getCursos()
}, [])
  return (
    <div className="row">
      <div className="col-sm-6 p-5 ">
        <h1>Bienvenido</h1>
        <div>
          <Link to="/FormularioColab" className="btn btn-outline-secondary me-3">
            Subir Curso
          </Link>
          <a href="" className="btn btn-outline-secondary">
            ¿Necesita ayuda?
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 p-5 ">
            <div className="form-floating mb-3">
              <h2>Mis cursos publicados</h2>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Duracion</th>
                  <th>Tipo</th>
                  <th>Requisitos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>Java</td>
                  <td style={{ textAlign: "center" }}>
                    24
                  </td>
                  <td style={{ textAlign: "center" }}>Syncrono</td>
                  <td style={{ textAlign: "center" }}>Introduccion a la programación</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIColaborador;
