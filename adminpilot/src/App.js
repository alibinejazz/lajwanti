import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrganizationManagement from './Pages/OrganizationManagement';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex h-screen  max-md:overflow-auto">
      <Navbar />
      <Sidebar />
      <div className="ml-2 p-4 mt-20 w-full h-screen bg-[#f4f5f9] max-md:ml-0 ">
       <Routes>
       <Route path="/" element={<Dashboard />} />
          <Route path="/organizations" element={<OrganizationManagement />} />
          <Route path="/settings" element={<Settings />} />
       </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
