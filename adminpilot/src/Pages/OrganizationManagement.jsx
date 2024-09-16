import React, { useState } from 'react';
import Card from '../Components/Card';
import OrganizationTable from '../Tables/OrganizationTable';
import AddOrganizationForm from '../Forms/AddOrgForm';

const OrganizationManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm((prevShow) => !prevShow);
  };

  return (
    <div>
      <Card>
        {!showAddForm ? (
          <OrganizationTable onAddOrganizationClick={toggleAddForm} />
        ) : (
          <AddOrganizationForm />
        )}
      </Card>
    </div>
  );
};

export default OrganizationManagement;
