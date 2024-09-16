const FormField = ({ label, name, value, onChange, type = "text", placeholder }) => {
    return (
      <div>
        <label className="block text-[16px] font-medium text-gray-700 mb-3">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full rounded-full border border-[#91a5bd] shadow-sm p-4"
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default FormField;
  