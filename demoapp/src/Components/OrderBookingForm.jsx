import React from "react";
import FormField from "./FormField";
import { useFormContext } from "./FormContext";
import logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";

const OrderBookingForm = () => {
  const { formData, updateFormData } = useFormContext();
  const nav = useNavigate();

  const handleChange = (field) => (e) => {
    updateFormData(field, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    nav("/measure");
  };

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <FormField
            label="Order Number"
            value={formData.orderNumber}
            onChange={handleChange("orderNumber")}
            placeholder="Enter order number"
          />
          <FormField
            label="Order Taken By"
            value={formData.orderTakenBy}
            onChange={handleChange("orderTakenBy")}
            placeholder="Enter order taker name"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <FormField
            label="Item"
            value={formData.items}
            onChange={handleChange("items")}
            placeholder="Enter item"
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
          <FormField
            label="Design Codes"
            value={formData.designCodes}
            onChange={handleChange("designCodes")}
            placeholder="Enter design codes"
          />
          <FormField
            label="Booking Date"
            value={formData.bookingDate}
            onChange={handleChange("bookingDate")}
            placeholder="Enter booking date"
          />
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
