import React, { useEffect } from "react";
import FormField from "./FormFieldForMeasurements";
import { useBodyMeasurements } from "./BodyMeasureContext";
import measure from "../images/measurements.png";
import logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";

const BodyMeasurements = () => {
  const { measurements, updateMeasurement } = useBodyMeasurements();
  const nav = useNavigate();

  const handleChange = (field) => (e) => {
    updateMeasurement(field, e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Measurements:", measurements);
    nav("/women")
  };

  return (
    <div className="bg-[#f5f5f5] font-serif">
      <div className="max-w-[1700px] mx-auto ">
        <div className="flex items-center justify-center h-16 w-full mb-6">
          <img src={logo} className="w-64  object-contain" alt="" />
        </div>
        <div className="bg-white rounded-2xl border border-[#c5a54e] mb-2">
          <h2 className="text-center text-2xl font-semibold text-[#c5a54e] mt-4">
            Body Measurements
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap bg-white shadow-lg rounded-lg p-8 justify-between"
          >
            {/* Left Column: Upper Body Measurements */}
            <div className="flex flex-col w-[20%]">
              <h3 className="text-lg text-[#c5a54e] mb-4">
                Upper Body Measurements
              </h3>
              <div className="flex flex-col">
                <FormField
                  label="A. Shoulder"
                  value={measurements.shoulder}
                  onChange={handleChange("shoulder")}
                  placeholder="cm"
                />
                <FormField
                  label="B. Across Bust"
                  value={measurements.acrossBust}
                  onChange={handleChange("acrossBust")}
                  placeholder="cm"
                />
                <FormField
                  label="C. Across Chest"
                  value={measurements.acrossChest}
                  onChange={handleChange("acrossChest")}
                  placeholder="cm"
                />
                <FormField
                  label="D. Lower Chest"
                  value={measurements.lowerChest}
                  onChange={handleChange("lowerChest")}
                  placeholder="cm"
                />
                <FormField
                  label="E. Waist"
                  value={measurements.waist}
                  onChange={handleChange("waist")}
                  placeholder="cm"
                />
                <FormField
                  label="F. Hips"
                  value={measurements.hips}
                  onChange={handleChange("hips")}
                  placeholder="cm"
                />
                <FormField
                  label="G. Shoulder to Apex"
                  value={measurements.shoulderToApex}
                  onChange={handleChange("shoulderToApex")}
                  placeholder="cm"
                />
                <FormField
                  label="H. Across Back"
                  value={measurements.acrossBack}
                  onChange={handleChange("acrossBack")}
                  placeholder="cm"
                />
                <h4 className="text-lg text-[#c5a54e] mb-3">
                  Torso And Neck Measurements
                </h4>
                <FormField
                  label="I. Neck to Waist"
                  value={measurements.neckToWaist}
                  onChange={handleChange("neckToWaist")}
                  placeholder="cm"
                />
                <FormField
                  label="J. Neckline"
                  value={measurements.neckline}
                  onChange={handleChange("neckline")}
                  placeholder="cm"
                />
                <FormField
                  label="K. Neck Depth"
                  value={measurements.neckDepth}
                  onChange={handleChange("neckDepth")}
                  placeholder="cm"
                />
              </div>
            </div>

            {/* Center Column: Body Diagram */}
            <div className="w-[600px] border rounded-2xl p-2 ml-28 border border-[#c5a54e]">
              <img src={measure} alt="Body Diagram" className="h-[800px] " />
            </div>

            {/* Right Column: Arm and Lower Body Measurements */}
            <div className="flex flex-col w-[28%]">
              <h3 className="text-lg text-[#c5a54e] mb-4">
                Arm And Sleeve Measurements
              </h3>
              <div className="flex flex-col">
                <FormField
                  label="L. Sleeve Length"
                  value={measurements.sleeveLength}
                  onChange={handleChange("sleeveLength")}
                  placeholder="cm"
                />
                <FormField
                  label="M. Bicep"
                  value={measurements.bicep}
                  onChange={handleChange("bicep")}
                  placeholder="cm"
                />
                <FormField
                  label="N. Wrist"
                  value={measurements.wrist}
                  onChange={handleChange("wrist")}
                  placeholder="cm"
                />
                <FormField
                  label="O. Armhole"
                  value={measurements.armhole}
                  onChange={handleChange("armhole")}
                  placeholder="cm"
                />
                <h4 className="text-lg text-[#c5a54e] mb-4">
                  Lower Body Measurements
                </h4>
                <FormField
                  label="P. Shirt Length"
                  value={measurements.shirtLength}
                  onChange={handleChange("shirtLength")}
                  placeholder="cm"
                />
                <FormField
                  label="Q. Shalwar Length"
                  value={measurements.shalwarLength}
                  onChange={handleChange("shalwarLength")}
                  placeholder="cm"
                />
                <FormField
                  label="R. Shalwar Waist"
                  value={measurements.shalwarWaist}
                  onChange={handleChange("shalwarWaist")}
                  placeholder="cm"
                />
                <FormField
                  label="S. Shalwar Pawncha"
                  value={measurements.shalwarPawncha}
                  onChange={handleChange("shalwarPawncha")}
                  placeholder="cm"
                />
                <FormField
                  label="T. Ankle"
                  value={measurements.ankle}
                  onChange={handleChange("ankle")}
                  placeholder="cm"
                />
                <FormField
                  label="U. Calf"
                  value={measurements.calf}
                  onChange={handleChange("calf")}
                  placeholder="cm"
                />
                <FormField
                  label="V. Thigh"
                  value={measurements.thigh}
                  onChange={handleChange("thigh")}
                  placeholder="cm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-[#c5a54e] text-white border-none rounded-md text-base font-bold cursor-pointer mt-8"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurements;
