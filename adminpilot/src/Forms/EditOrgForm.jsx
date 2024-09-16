import React, { useState } from "react";
import FormField from "./FormField"; // Importing the FormField component
import ActionButtonsForEdit from "./ActionButtonsForEdit";
import Card from "../Components/Card";

const EditOrganizationForm = ({onBack}) => {
  const [formData, setFormData] = useState({
    orgName: '',
    webUrl: '',
    city: '',
    industry: '',
    assignLimit: '',
    phoneNumber: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    position: '',
    secondaryContactName: '',
    secondaryContactPhone: '',
    secondaryContactEmail: '',
    secondaryPosition: '',
  });

  const [showSecondaryContact, setShowSecondaryContact] = useState(false);

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
    <div className=" mx-auto p-0">
      <h2 className="text-[#397db5] font-bold mb-4 text-xl">
        Edit Organization
      </h2>
      <h2 className="text-black font-bold mb-3 text-lg">Organization Detail</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <FormField
          type="text"
          label="Organization Name"
          name="orgName"
          value={formData.orgName}
          onChange={handleInputChange}
        />
        <FormField
          label="Website URL"
          name="webUrl"
          value={formData.webUrl}
          onChange={handleInputChange}
          type="text"
        />
        <FormField
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          type="text"
        />
        <FormField
          label="Country/Region"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          type="text"
        /> 
        <FormField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          type="text"
        />
         <FormField
          label="Assign limit"
          name="assignLimit"
          value={formData.assignLimit}
          onChange={handleInputChange}
          type="number"
        />
      </div>
      <h2 className="text-black font-bold mb-6 text-lg">Point of Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          type="text"
          label="Contact Person Name"
          name="contactName"
          value={formData.contactName}
          onChange={handleInputChange}
        />
        <FormField
          label="Position/Title"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          type="text"
        />
        <FormField
          label="Email Address"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleInputChange}
          type="email"
        />
        <FormField
          label="Phone Number"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleInputChange}
          type="text"
        />
      </div>
      <div className="mt-4 mb-6 flex justify-center border-t">
        <button
          className="text-black flex items-center mt-4"
          onClick={() => setShowSecondaryContact(!showSecondaryContact)}
        >
          <span className="mr-2 rounded-full w-6 text-center bg-[#397dd4] text-md font-bold text-white"> {showSecondaryContact ? '-' : '+'} </span> {/* Switch between + and - */}
          Add Secondary Point of Contact
        </button>
      </div>

      {showSecondaryContact && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            type="text"
            label="Secondary Contact Person Name"
            name="secondaryContactName"
            value={formData.secondaryContactName}
            onChange={handleInputChange}
          />
          <FormField
            label="Position/Title"
            name="secondaryPosition"
            value={formData.secondaryPosition}
            onChange={handleInputChange}
            type="text"
          />
          <FormField
            label="Email Address"
            name="secondaryContactEmail"
            value={formData.secondaryContactEmail}
            onChange={handleInputChange}
            type="email"
          />
          <FormField
            label="Phone Number"
            name="secondaryContactPhone"
            value={formData.secondaryContactPhone}
            onChange={handleInputChange}
            type="text"
          />
        </div>
      )}
      <ActionButtonsForEdit onSave={handleSubmit} />{" "}
      <Card>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={onBack}
            >
              Back to Dashboard
            </button>
          </Card>
    </div>
  );
};

export default EditOrganizationForm;
