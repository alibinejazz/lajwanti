const ActionButtonsAddUser = ({ onSave }) => {
    return (
      <div className="mt-6 flex items-center space-x-2 flex-wrap max-sm:justify-center">
        <button
          type="button"
          disabled
          className="bg-transparent disabled:text-[#cccccc] rounded-full disabled:cursor-not-allowed py-3 px-9 text-md border disabled:border-[#cccccc] border-[#3d7bb5] text-[#3d7bb5]"
        >
          Download Credentials
        </button>
        <button
          type="button"  // Change to button type instead of submit
          className="bg-[#397db5] text-white rounded-full hover:bg-[#397dd4] px-12 py-3 font-bold"
          onClick={onSave}  // Bind the passed onSave handler
        >
          Save
        </button>
      </div>
    );
  };
  
  export default ActionButtonsAddUser;
  