import React, { createContext, useState, useContext } from "react";

// Create the context
const FormContext = createContext();

// Create a custom hook for easier access to the context
export const useFormContext = () => {
  return useContext(FormContext);
};

// Create a provider to wrap the app
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    address: "",
    orderNumber: "",
    orderTakenBy: "",
    items: "",
    designCodes: "",
    bookingDate: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
