import React from "react";

const InputField = ({ label, value, onChange, index }) => {
  return (
    <div className="flex items-center gap-1 text-base">
      {index}.<label className="w-96">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border border-[#c5a54e] rounded-xl p-4 text-sm w-full"
        placeholder="cm"
      />
    </div>
  );
};

export default InputField;
