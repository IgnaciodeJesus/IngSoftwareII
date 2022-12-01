import React from "react";

const FormInput = ({ label, type, name, onChange }) => {

   return (
      <div className="mb-3 row">
         <label htmlFor={label} className="col-sm-2 col-form-label">
            {label}:
         </label>
         <div className="col-sm-10">
            <input onChange={onChange} name={name} type={type} className="form-control" id={label} />
         </div>
      </div>
   );
};

export default FormInput;