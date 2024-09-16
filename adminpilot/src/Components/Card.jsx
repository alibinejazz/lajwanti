import React from "react";

const Card = ({ width, height, icon, name, count, children, mt, mb, onClick, padding }) => {
  return (
    <div
      className="bg-white  rounded-3xl p-6"
      style={{ width: width, height: height, padding:padding }}
      onClick={onClick}
    >
      {icon && (
        <img
          src={icon}
          alt={`${name} icon`}
          className="h-10 w-10 text-gray-400"
        />
      )}

      <div style={{marginTop:mt, marginBottom:mb}}>
        {name && (
          <div className="text-gray-500 text-md font-medium mb-1">{name}</div>
        )}
        {count && (
          <div className="text-[#3b7cb6] text-2xl font-bold">{count}</div>
        )}
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
