import React, { useContext, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useFormContext } from "./FormContext";
import { useWomenMeasurements } from "./WomenMeasureMentContext";
import { useBodyMeasurements } from "./BodyMeasureContext";
import { useNavigate } from "react-router-dom";

export const Invoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const nav = useNavigate();

  const { formData, setFormData } = useFormContext();
  console.log(formData);
  useEffect(() => {
    const part1 = generateRandomNumber(200, 299);
    const part2 = generateRandomNumber(1000, 1199);
    setInvoiceNumber(`${part1}/${part2}`);
  }, []);

  const { measurements, setMeasurements } = useBodyMeasurements();
  const {measurements: womenMeasurements, setMeasurements:setWomenMeasurements} = useWomenMeasurements();
  console.log(measurements);
  console.log(womenMeasurements)

  const nonNullMeasurements = Object.entries(measurements)
    .filter(([key, value]) => value !== null && value !== "")
    .map(([key, value], index) => (
      <p key={index} className="text-sm text-gray-600">
        <span className="font-medium">{key}:</span> {value}
      </p>
    ));

    const nonNullWomenMeasurements = Object.entries(womenMeasurements)
    .filter(([key, value]) => value !== null && value !== "")
    .map(([key, value], index) => (
      <p key={index} className="text-sm text-gray-600">
        <span className="font-medium">{key}:</span> {value}
      </p>
    ));

  // SAme size invoice for all screens download

  const GenerateInvoice = () => {
    const element = document.querySelector("#invoiceCapture");

    const clonedElement = element.cloneNode(true);
    const fixedWidth = 800;
    const fixedHeight = 1120;

    clonedElement.style.width = `${fixedWidth}px`;
    clonedElement.style.height = `${fixedHeight}px`;
    clonedElement.style.position = "absolute";
    clonedElement.style.left = "-9999px";

    document.body.appendChild(clonedElement);

    html2canvas(clonedElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [fixedWidth, fixedHeight],
      });

      pdf.addImage(imgData, "PNG", 0, 0, fixedWidth, fixedHeight);
      pdf.save("invoice.pdf");

      document.body.removeChild(clonedElement);
    });
  };

  // different sizes invoice download on every screen

  //   const GenerateInvoice = () => {
  //     const element = document.querySelector("#invoiceCapture");

  //     const originalStyles = element.style.cssText;
  //     element.style.position = "fixed";
  //     element.style.top = "0";
  //     element.style.left = "0";
  //     element.style.width = "100vw";
  //     element.style.height = "100vh";
  //     element.style.background = "white";
  //     element.style.zIndex = "9999";

  //     html2canvas(element, {
  //       scale: 2,
  //       useCORS: true,
  //     }).then((canvas) => {
  //       element.style.cssText = originalStyles;

  //       const imgData = canvas.toDataURL("image/png", 1.0);
  //       const pdf = new jsPDF({
  //         orientation: "portrait",
  //         unit: "pt",
  //         format: [595.28, 841.89],
  //       });
  //       pdf.addImage(imgData, "PNG", 0, 0, 595.28, 841.89);
  //       pdf.save("invoice.pdf");
  //     });
  //   };

  return (
    <div>
      <div
        id="invoiceCapture"
        className="max-w-4xl mx-auto border border-gray-300 p-6 rounded-lg font-serif mt-2"
      >
        <header className="flex justify-between items-center border-b border-gray-300 pb-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">INVOICE</h1>
            <p className="text-sm text-gray-500">Lajwanti Studio</p>
            <p className="text-sm text-gray-500">
              164-P, Gulberg 2, Mini Market, Lahore, Pakistan
            </p>
            <p className="text-sm text-gray-500">
              sales@lajwanti.com.pk | +92 309-7773181
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Invoice #: <span className="font-normal">{invoiceNumber}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Date: {formData?.bookingDate}
            </p>
          </div>
        </header>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Client Details
          </h3>
          <div className="mt-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {formData?.customerName}
            </p>
            <p>
              <span className="font-medium">Contact:</span>{" "}
              {formData?.phoneNumber}
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Order Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mt-2 text-sm text-gray-600">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-4 py-2">SR#</th>
                  <th className="border border-gray-300 px-4 py-2">Order#</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Garment Code
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Qty</th>
                  <th className="border border-gray-300 px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {formData?.orderNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    <p className="text-lg">{formData?.items}</p>
                    {nonNullMeasurements.length > 0 ? 
                    <div className="border-t mt-4">
                      <p className="text-[16px]">Measurements:</p>
                      <p className="ml-4 mt-2">{nonNullMeasurements}</p>
                    </div> : <></>}
                    {nonNullWomenMeasurements.length > 0 ? 
                    <div className="border-t mt-4">
                      <p className="text-[16px]">Special Measurements:</p>
                      <p className="ml-4 mt-2">{nonNullWomenMeasurements}</p>
                    </div> : <></>}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    30,300 PKR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 flex justify-between items-center flex-wrap">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Dispatch Status:</span> Dispatched
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Remarks:</span> Pay Fast Karachi PAK
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Amount Due</h3>
            <p className="text-xl font-bold text-gray-800">30,300 PKR</p>
          </div>
        </section>
      </div>
      <div className="mt-4 text-center flex items-center justify-center gap-2">
        <button
          onClick={GenerateInvoice}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Download Invoice
        </button>
        <button
          onClick={()=> {nav("/"); 
            setFormData("");
            setWomenMeasurements("");
            setMeasurements("");
          }}
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600"
        >
          Continue to shop
        </button>
      </div>
    </div>
  );
};
