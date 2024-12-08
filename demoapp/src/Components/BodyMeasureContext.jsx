import React, { createContext, useState, useContext } from "react";

// Create the context
const BodyMeasurementsContext = createContext();

// Create a custom hook for accessing the context
export const useBodyMeasurements = () => {
  return useContext(BodyMeasurementsContext);
};

// Create a provider to wrap the application
export const BodyMeasurementsProvider = ({ children }) => {
  const [measurements, setMeasurements] = useState({
    // Upper Body Measurements
    shoulder: "",
    acrossBust: "",
    acrossChest: "",
    lowerChest: "",
    waist: "",
    hips: "",
    shoulderToApex: "",
    acrossBack: "",
    // Torso and Neck Measurements
    neckToWaist: "",
    neckline: "",
    neckDepth: "",
    // Arm and Sleeve Measurements
    sleeveLength: "",
    bicep: "",
    wrist: "",
    armhole: "",
    // Lower Body Measurements
    shirtLength: "",
    shalwarLength: "",
    shalwarWaist: "",
    shalwarPawncha: "",
    ankle: "",
    calf: "",
    thigh: "",
  });

  const updateMeasurement = (key, value) => {
    setMeasurements((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <BodyMeasurementsContext.Provider value={{ measurements, updateMeasurement, setMeasurements }}>
      {children}
    </BodyMeasurementsContext.Provider>
  );
};
