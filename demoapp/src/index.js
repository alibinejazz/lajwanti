import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FormProvider } from './Components/FormContext';
import { BodyMeasurementsProvider } from './Components/BodyMeasureContext';
import { WomenMeasurementProvider } from './Components/WomenMeasureMentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WomenMeasurementProvider>
    <BodyMeasurementsProvider>
    <FormProvider>
    <App />
    </FormProvider>
    </BodyMeasurementsProvider>
    </WomenMeasurementProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
