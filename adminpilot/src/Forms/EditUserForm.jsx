import React, { useState } from "react";
import FormField from "./FormField"; // Importing the FormField component
import ActionButtonsEditUser from "./ActionButtonsEditUser";

const EditUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
  };


  return (
    <div className="mx-auto p-0">
      <h2 className="text-[#3d7bb5] font-bold mb-4 text-xl">Edit User</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <FormField
          type="text"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FormField
          type="text"
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <FormField
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormField
          type="text"
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        />
      </div>
      <ActionButtonsEditUser onSave={handleSubmit}/>
    </div>
  );
};

export default EditUserForm;
