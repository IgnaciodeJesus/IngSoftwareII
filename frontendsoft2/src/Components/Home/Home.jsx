import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
   const Modalidad = ({ title, img }) => {
      return (
         <div className="col-md-6 p-5 d-flex flex-column align-items-center">
            <p className="text-center mb-5 display-6 color-primary">{title}</p>
            <img src={img} className="img-home" alt="" />
         </div>
      );
   };
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-6 p-5">
               <h1 className="display-2 mb-5">Bienvenido</h1>
               <p className="text-start mb-5">
                Vestibulum blandit, massa eu molestie pharetra, nisi est tristique tortor, 
                eu efficitur nisl turpis vel dui. Aenean tincidunt justo id massa efficitur,
                a sodales justo vestibulum. Nunc porttitor vel ipsum sed aliquam. Pellentesque
                 habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Nullam ut massa faucibus, mattis ligula vitae, consequat sem. Duis tempor, urna eu 
                  faucibus molestie, justo odio imperdiet erat, eu dignissim risus erat feugiat dui. 
                  Donec commodo augue mattis massa bibendum, vitae accumsan ipsum ultrices. Proin et auctor nunc.
                   Vivamus quam ante, semper et metus vitae, tristique consequat justo. Ut ut scelerisque mauris.
                    Donec dapibus efficitur posuere.
               </p>
            </div>
            <div className="col-md-6 p-5">
               <img
                  id="img-portada"
                  src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default Home;
