import React from 'react';
import Sidebar from './SideBar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="mt-16 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
