import React, { useEffect } from "react";
import InputField from "./InputField";
import { useWomenMeasurements } from "./WomenMeasureMentContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.png"

const WomenMeasurementsForm = () => {
  const { measurements, setMeasurements } = useWomenMeasurements();

  const handleChange = (field) => (event) => {
    setMeasurements({ ...measurements, [field]: event.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
 const nav = useNavigate();
  const fields = [
    "Point Length",
    "Under Bust Length",
    "Belly Length",
    "Small Hip Length",
    "Maxi Length",
    "Maxi Back Tail Length",
    "Blouse Fitting",
    "Blouse Length",
    "Gown Length",
    "Ghera",
    "Chalk",
    "Upper Bust",
    "Bust",
    "Belly",
    "Small Hip",
    "Back Cross",
    "Front Cross",
    "Neck Broad",
    "Front Neck Deep",
    "Back Neck Deep",
    "Cap Sleeves Length",
    "Cap Sleeves Opening",
    "Three Quarter Sleeves",
    "Three Quarter Opening",
    "Sleeves Length",
    "Trouser Waist",
    "Sharara Waist",
    "Garara Waist",
    "Lehnga Waist",
    "Trouser Length",
    "Sharara Length",
    "Garara Length",
    "Lehnga Length",
    "Upper Thigh",
    "Knee",
    "Mid Calf",
    "Bottom Opening",
    "Goot Length Garara",
    "Shoulder to Knee",
    "Shoulder to Ankle",
    "Shoulder to Floor",
    "Waist to Knee",
    "Waist to Ankle",
    "Waist to Floor",
    "Client Height",
    "Heels",
  ];

  return (

    <div className="bg-[#f5f5f5] font-serif">
        <div className="flex items-center justify-center h-16 w-full mb-6">
    <img src={logo} className="w-64  object-contain" alt=""/>
    </div>
    <div className="max-w-[1700px] mx-auto p-4 bg-white border border-[#c5a54e] rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-[#c5a54e]">Women Measurements</h1>
      <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2">
        {fields.map((field, index) => (
          <InputField
            key={index}
            label={field}
            value={measurements[field.replace(/\s+/g, "").toLowerCase()]}
            onChange={handleChange(field.replace(/\s+/g, "").toLowerCase())}
            index={index+1}
          />
        ))}
      </div>
      <button
        className="w-full p-4 bg-[#c5a54e] text-white border-none rounded-md text-base font-bold cursor-pointer mt-8"
        onClick={() => nav("/invoice")}
      >
        Continue
      </button>
    </div>
    </div>
  );
};

export default WomenMeasurementsForm;
