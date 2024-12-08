import { createContext, useContext, useState } from "react";

const WomenMeasurementContext = createContext();

export const WomenMeasurementProvider = ({ children }) => {
  const [measurements, setMeasurements] = useState({
    // Initialize all fields with an empty value
    pointLength: "",
    underBustLength: "",
    bellyLength: "",
    smallHipLength: "",
    maxiLength: "",
    maxiBackTailLength: "",
    blouseFitting: "",
    blouseLength: "",
    gownLength: "",
    ghera: "",
    chalk: "",
    upperBust: "",
    bust: "",
    belly: "",
    smallHip: "",
    backCross: "",
    frontCross: "",
    neckBroad: "",
    frontNeckDeep: "",
    backNeckDeep: "",
    capSleevesLength: "",
    capSleevesOpening: "",
    threeQuarterSleeves: "",
    threeQuarterOpening: "",
    sleevesLength: "",
    trouserWaist: "",
    shararaWaist: "",
    gararaWaist: "",
    lehngaWaist: "",
    trouserLength: "",
    shararaLength: "",
    gararaLength: "",
    lehngaLength: "",
    upperThigh: "",
    knee: "",
    midCalf: "",
    bottomOpening: "",
    gootLengthGarara: "",
    shoulderToKnee: "",
    shoulderToAnkle: "",
    shoulderToFloor: "",
    waistToKnee: "",
    waistToAnkle: "",
    waistToFloor: "",
    clientHeight: "",
    heels: "",
  });

  return (
    <WomenMeasurementContext.Provider value={{ measurements, setMeasurements }}>
      {children}
    </WomenMeasurementContext.Provider>
  );
};

export const useWomenMeasurements = () => useContext(WomenMeasurementContext);
