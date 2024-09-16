import React from 'react';
import Card from './Card';

const DeleteModal = ({ show, onDeleteConfirm, onCancel, what }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      {/* Overlay with transition */}
      <div className={`absolute inset-0 bg-[#e9f0f6] transition-opacity duration-300 ${show ? 'opacity-80' : 'opacity-0'}`}></div>

      {/* Modal container with scale and opacity transition */}
      <div className={`bg-[#f4f5f9] p-8 rounded-2xl shadow-lg z-10 transition-transform transform duration-300 ease-out ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <h2 className="text-lg font-bold mb-4">Confirmation</h2>
        <Card padding="40px">
          <div className='flex flex-col justify-center items-center'>
            <p className="mb-4">Are you sure you want to delete?</p>
            <p className="text-[#d84848] mb-6">All the information related to this {what} will be deleted.</p>
            <div className="flex justify-end">
              <button 
                className="mr-4 px-14 py-3 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button 
                className="px-14 py-3 bg-[#d84848] text-white rounded-full"
                onClick={onDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeleteModal;
