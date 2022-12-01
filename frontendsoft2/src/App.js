import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.jsx";
import Login from "./Components/Login/Login";
import RegistroEstudiante from "./Components/RegistroEstudiante/RegistroEstudiante.jsx";
import RegistroColaborador from "./Components/RegistroColaborador/RegistroColaborador.jsx";
import UIEstudiante from "./Components/UIEstudiante/UIEstudiante";
import UIColaborador from "./Components/UIColaborador/UIColaborador";
import FormularioColab from "./Components/FormularioColab/FormularioColab";
import "./Styles/home.css"
function App() {
   return (
      <div className="d-flex flex-column min-vh-100">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="RegistroColaborador" element={<RegistroColaborador/>} />
            <Route path="RegistroEstudiante" element={<RegistroEstudiante/>} />
            <Route path="FormularioColab" element={<FormularioColab/>}/>
            <Route path="UIColaborador" element={<UIColaborador/>}/>
            <Route path="UIEstudiante" element={<UIEstudiante/>}/>

            
         </Routes>
         <Footer />
         
      </div>
   );
}

export default App;
