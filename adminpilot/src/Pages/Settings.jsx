import React, { useState } from 'react'
import UserManagementTable from '../Tables/UserManagementTable'
import Card from '../Components/Card'
import AddUserForm from '../Forms/AddUserForm';

const Settings = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm((prevShow) => !prevShow);
  };
  return (
    <div>
      <Card>
        {!showAddForm ? <UserManagementTable onAddUserClick={toggleAddForm}/> : <AddUserForm/>}
      
      </Card>
    </div>
    )
}

export default Settings