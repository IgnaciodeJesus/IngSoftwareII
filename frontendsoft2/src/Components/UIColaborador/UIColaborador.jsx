import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import image from "../../Assets/Images/Java.png";
import image2 from "../../Assets/Images/Python.png";
import image3 from "../../Assets/Images/VBA.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const UIColaborador = () => {
  return (
    <div className="row">
      <div className="col-sm-6 p-5 ">
        <h1>Bienvenido</h1>
        <div>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Ingrese el documento de su curso</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
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
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Nivel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>1</td>
                  <td style={{ textAlign: "center" }}>
                    Java
                    <img src={image} alt="" width="100" height="100" />
                  </td>
                  <td style={{ textAlign: "center" }}>Basico</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>2</td>
                  <td style={{ textAlign: "center" }}>
                    Python
                    <img src={image2} alt="" width="100" height="100" />
                  </td>
                  <td style={{ textAlign: "center" }}>Basico</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>3</td>
                  <td style={{ textAlign: "center" }}>
                    Visual Basics
                    <img src={image3} alt="" width="100" height="100" />
                  </td>
                  <td style={{ textAlign: "center" }}>Basico</td>
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
