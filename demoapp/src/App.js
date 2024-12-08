import logo from './logo.svg';
import './App.css';
import { Invoice } from './Components/Invoice';
import OrderBookingForm from './Components/OrderBookingForm';
import BodyMeasurements from './Components/BodyMeasurements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WomenMeasurementsForm from './Components/WomenMeasurementForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<OrderBookingForm />} />
          <Route path="/measure" element={<BodyMeasurements />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path='/women' element={<WomenMeasurementsForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
