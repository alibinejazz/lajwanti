import React from 'react'
import DataTable from '../Tables/AdminTable'
import Card from '../Components/Card'
import QueriesTable from '../Tables/QueriesTable'

const OrganizationManagement = () => {
  return (
    <div>
      <Card height={800}>
        {/* <DataTable/> */}
      <QueriesTable/>
      </Card>
      </div>
  )
}

export default OrganizationManagement