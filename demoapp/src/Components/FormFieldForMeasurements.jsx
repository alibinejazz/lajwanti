import React from "react";

const FormField = ({ label, type = "text", value, onChange, placeholder, readOnly = false }) => (
  <div
    style={{
      marginBottom: "1rem",
      display: "flex",
      alignItems: "flex-start", // Align items to the top of the label
      gap: "1rem",
      width:"450px" // Maintain consistent spacing between label and input
    }}
  >
    {/* Label with fixed width */}
    <label
      style={{
        width: "200px", // Fixed width for consistent alignment
        whiteSpace: "nowrap", // Prevent wrapping
        lineHeight: "2",
        fontSize:"17px" // Adjust line height for multi-line labels
      }}
    >
      {label}
    </label>
    {/* Input field */}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      style={{
        width: "300px", // Fixed width for the input
        padding: "0.8rem",
        border: "1px solid #d1b035",
        borderRadius: "10px",
        alignSelf: "center", // Ensures input is vertically aligned
      }}
    />
  </div>
);

export default FormField;
