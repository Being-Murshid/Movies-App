import React from "react";

const InputFeild = ({ type, variant, width, label, height }) => {
  return (
    <div>
      <label htmlFor="input" className="font-[Lato] text-default text-[20px]">
        {label}
      </label>
      {variant === "primary" && (
        <input
          className={`${width} ${height}  border-default border-[1px] rounded-[4px]`}
          id="input"
          type={type}
        />
      )}
      {variant === "secondary" && (
        <input
          className={`${width} ${height} border-secondary border-[1px] rounded-[4px]`}
          id="input"
          type={type}
        />
      )}
    </div>
  );
};

export default InputFeild;
