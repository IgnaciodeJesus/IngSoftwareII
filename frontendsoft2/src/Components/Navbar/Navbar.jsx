import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/LogoFinalAprend.png";
const Navbar = () => {
   return (
      <div className="navbar navbar-light bg-light">
         <div className="container-fluid Navbar">
            <Link className="navbar-brand" to="/">
               <img
                  src={logo}
                  alt=""
                  width="110"
                  height="110"
                  className="d-inline-block align-text-top me-3"
               />
            </Link>
            <div className="Navbar-item">
               <Link className="mx-3" to="/preguntasFrecuentes">
                  Preguntas Frecuentes
               </Link>
               <Link className="mx-3" to="/blog">
                  Nuestros Cursos
               </Link>
            </div>
            <div>
               <Link
                  to="/RegistroColaborador"
                  className="btn btn-outline-secondary mx-2">
                  ¿Quieres Colaborar?
               </Link>
               <Link
                  to="/RegistroEstudiante"
                  className="btn btn-outline-secondary mx-2">
                  Registrese
               </Link>
               <Link
                  to="/Login"
                  className="btn color-primary-bg-btn mx-2">
                  Iniciar Sesion
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
