import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import image from "../../Assets/Images/Java.png";
import image2 from "../../Assets/Images/Python.png";
import image3 from "../../Assets/Images/VBA.png";

const UIEstudiante = () => {
  return (
    <div className="row">
      <div className="col-sm-6 p-5 ">
        <h1>Bienvenido</h1>
      </div>
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-6 p-5 ">
          <div className="form-floating mb-3">
          <h2>¿Deseas aprender algo?</h2>
        </div>
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: "center" }} >
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Nivel</th>
                  <th>Acción</th>
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
                  <td style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      className="btn color-primary-bg-btn me-3"
                    >
                      Inscribirse
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>2</td>
                  <td style={{ textAlign: "center" }}>
                    Python
                    <img src={image2} alt="" width="100" height="100" />
                  </td>
                  <td style={{ textAlign: "center" }}>Basico</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      className="btn color-primary-bg-btn me-3"
                    >
                      Inscribirse
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>3</td>
                  <td style={{ textAlign: "center" }}>
                    Visual Basics
                    <img src={image3} alt="" width="100" height="100" />
                  </td>
                  <td style={{ textAlign: "center" }}>Basico</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      className="btn color-primary-bg-btn me-3"
                    >
                      Inscribirse
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
            </div>
            <div className="col-sm-6 p-5 ">
            <div className="form-floating mb-3">
          <h2>Mis Cursos Inscritos</h2>
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

export default UIEstudiante;
