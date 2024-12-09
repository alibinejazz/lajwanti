import React, { useEffect } from "react";
import FormField from "./FormField";
import { useFormContext } from "./FormContext";
import logo from "../images/Logo.png";
import { data, useNavigate } from "react-router-dom";
import useUpdateGoogleSheet from "./useUpdateGoogleSheet";

const OrderBookingForm = () => {
  const { formData, updateFormData, resetFormData } = useFormContext();
  const nav = useNavigate();
  const { updateGoogleSheet, isLoading, error, response } = useUpdateGoogleSheet();


  const handleChange = (field) => (e) => {
    updateFormData(field, e.target.value);
  };

  useEffect(() => {
    resetFormData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const dataToSend = [
      formData.customerName,
      formData.phoneNumber,
      formData.address,
      formData.email,
      formData.invoiceNumber,
      new Date().toLocaleDateString(), 
      formData.items,
      formData.designCodes,
    ];

    updateGoogleSheet(dataToSend);
    console.log(dataToSend)

    if (!error) {
      nav("/measure");
    }  };

  return (
    <div className="bg-[#f5f5f5] font-serif">
      <div className="flex items-center justify-center h-16 w-full mb-6">
        <img src={logo} className="w-64" alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "1700px",
          margin: "0 auto",
          padding: "2rem",
          border: "1px solid #c5a54e",
          borderRadius: "10px",
          backgroundColor: "#fdfdfd",
        }}
      >
        <h2
          style={{
            color: "#c5a54e",
            marginBottom: "1rem",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          General Information
        </h2>
        <p
          style={{
            marginBottom: "1rem",
            fontStyle: "italic",
            color: "#666",
            textAlign: "center",
          }}
        >
          Please provide the customer's details.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <FormField
            label="Customer Name"
            value={formData.customerName}
            onChange={handleChange("customerName")}
            placeholder="Enter customer name"
          />
          <FormField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange("phoneNumber")}
            placeholder="Enter phone number"
            type="number"
          />
          <FormField
            label="Email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="Enter email address"
            type="email"
          />
          <FormField
            label="Address"
            value={formData.address}
            onChange={handleChange("address")}
            placeholder="Enter customer address"
          />
        </div>

        <h2
          style={{
            color: "#c5a54e",
            marginBottom: "1rem",
            marginTop: "2rem",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Order Details
        </h2>
        <p
          style={{
            marginBottom: "1rem",
            fontStyle: "italic",
            color: "#666",
            textAlign: "center",
          }}
        >
          Please provide the order details.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <FormField
            label="Item"
            value={formData.items}
            onChange={handleChange("items")}
            placeholder="Enter item"
          />
          <FormField
            label="Design Codes"
            value={formData.designCodes}
            onChange={handleChange("designCodes")}
            placeholder="Enter design codes"
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-[#c5a54e] text-white border-none rounded-md text-base font-bold cursor-pointer mt-6"
        >
          Continue to proceed
        </button>
      </form>
    </div>
  );
};

export default OrderBookingForm;
