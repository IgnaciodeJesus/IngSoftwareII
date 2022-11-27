import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import image from "../../Assets/Images/Java.png";
import image2 from "../../Assets/Images/Python.png";
import image3 from "../../Assets/Images/VBA.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ProgressBar from "react-bootstrap/ProgressBar";
const UIEstudiante = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="row">
      <div className="col-sm-6 p-5 ">
        <h1>Bienvenido a Aprende+</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-6 p-5 ">
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>¿Que desea hacer?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    <div>
                      <Button
                        onClick={() => setOpen1(!open1)}
                        aria-controls="collapse1"
                        aria-expanded={open1}
                        className="btn color-primary-bg-btn me-3"
                      >
                        Mis cursos
                      </Button>
                      <Collapse in={open1}>
                        <div id="collapse1">
                          <Table class="col-xs-12 col-md-8">
                            <thead>
                              <tr>
                                <th>Nombre</th>
                                <th>Progreso</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ textAlign: "center" }}>
                                  <div className="row"></div>
                                  <div className="row"></div>
                                  <img
                                    src={image}
                                    alt=""
                                    width="100"
                                    height="100"
                                  />
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  <ProgressBar animated now={80} />
                                </td>
                                <td>
                                  <a
                                    href="https://drive.google.com/drive/folders/18bugg6hBkODmGWDTa1T4v-W9uoCiLOHm"
                                    class="btn color-primary-bg-btn me-3"
                                    role="button"
                                    aria-pressed="true"
                                  >
                                    Ir al curso
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ textAlign: "center" }}>
                                  Python
                                  <img
                                    src={image2}
                                    alt=""
                                    width="100"
                                    height="100"
                                  />
                                </td>
                                <td style={{ textAlign: "center" }}>Basico</td>
                              </tr>
                              <tr>
                                <td style={{ textAlign: "center" }}>
                                  Visual Basics
                                  <img
                                    src={image3}
                                    alt=""
                                    width="100"
                                    height="100"
                                  />
                                </td>
                                <td style={{ textAlign: "center" }}>Basico</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Collapse>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <div className="me-3">
                      <Button
                        onClick={() => setOpen2(!open2)}
                        aria-controls="Collapse2"
                        aria-expanded={open2}
                        className="btn color-primary-bg-btn me-3"
                      >
                        Inscribirme a cursos
                      </Button>
                      <Collapse in={open2}>
                        <div id="Collapse2">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </Collapse>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default UIEstudiante;
