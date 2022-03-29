import React from "react";

function FormInput({ blurHandler, value, changeHandler, placeHolder, name }) {
  return (
    <div>
      <input
        onBlur={(e) => blurHandler(e)}
        name={name}
        value={value}
        onChange={(e) => changeHandler(e)}
        type="text"
        placeholder={placeHolder}
        className="input"
      />
    </div>
  );
}

export default FormInput;
